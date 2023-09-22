import { MotorolaService } from '@app/motorola';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly motorolaService: MotorolaService) {}

  async getHello(): Promise<object> {
    const result = await this.motorolaService.getSpecs();
    return result;
  }
}
