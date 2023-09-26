import { Injectable } from '@nestjs/common';
import { compose, flatten, head, map, prop } from 'ramda';
import { CrawlerService } from './crawler.service';

interface ISpec {
  name: string;
  originalName: string;
  value: object;
}

@Injectable()
export class SpecificationService {
  constructor(private readonly crawlerService: CrawlerService) { }

  async getSpecsByUrl(url: string) {
    const specs = await this.crawlerService.run(url);
    return this.getSpecifications(specs);
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
