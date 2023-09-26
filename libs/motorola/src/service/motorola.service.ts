/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { compose, map } from 'ramda';
import { SpecificationService } from './specification.service';

@Injectable()
export class MotorolaService {
  constructor(private readonly specificationService: SpecificationService) {}

  async getAllSpecs() {
    const allUrl = await this.getAllUrls();

    const result = await compose(
      (promises: Array<object>) => Promise.all(promises),
      map(
        (url: string) => this.getSpecsByUrl(url)
      )
    )(allUrl)


    return result;
  }

  getAllUrls(): Promise<string[]> {
    return Promise.resolve([
      'https://www.motorola.com.br/smartphone-moto-g73-5g/p',
    ]);
  }

  async getSpecsByUrl(url: string): Promise<object> {
    return this.specificationService.getSpecsByUrl(url);
  }
}
