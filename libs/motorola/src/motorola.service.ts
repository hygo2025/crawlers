import { Injectable } from '@nestjs/common';
import { andThen, compose, flatten, head, map, prop } from 'ramda';
import { CrawlerService } from './crawler.service';

interface ISpec {
  name: string;
  originalName: string;
  value: object;
}
@Injectable()
export class MotorolaService {
  constructor(private readonly crawlerService: CrawlerService) {}

  async getSpecs(url = 'https://www.motorola.com.br/smartphone-moto-g73-5g/p') {
    return compose(
      andThen((specs: object) => this.getSpecifications(specs)),
      (url: string) => this.crawlerService.run(url),
    )(url);
  }

  private getSpecifications(specs: object): ISpec[] {
    return compose(
      (specifications: string[]) =>
        map((elem: string) => prop(elem)(specs))(specifications),
      flatten,
      map(
        compose(map(prop('id')), prop('specifications'), (elem: string) =>
          prop(elem)(specs),
        ),
      ),
      (id: string) => this.getSpecificationGroups(specs, id),
      (specs) => this.getProductId(specs),
    )(specs) as ISpec[];
  }

  private getSpecificationGroups(specs: object, id: string) {
    return compose(
      map(prop('id')),
      compose(prop('specificationGroups')),
      prop(id),
    )(specs);
  }

  private getProductId(specs: object): string {
    return compose(
      (obj) =>
        compose(
          prop('id'),
          (key: string) => prop(key, obj),
          head,
          Object.keys,
        )(obj),
      prop('ROOT_QUERY'),
    )(specs);
  }
}
