import { Controller, Get } from '@nestjs/common';
import { MotorolaService } from '@app/motorola';

@Controller()
export class AppController {
  constructor(private readonly motorolaService: MotorolaService) {}

  @Get('/motorola')
  async getAll(): Promise<object> {
    const result = await this.motorolaService.getAllSpecs();
    return result;
  }
}
