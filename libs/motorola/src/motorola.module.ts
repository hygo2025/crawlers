import { Module } from '@nestjs/common';
import { MotorolaService } from './motorola.service';

@Module({
  providers: [MotorolaService],
  exports: [MotorolaService],
})
export class MotorolaModule {}
