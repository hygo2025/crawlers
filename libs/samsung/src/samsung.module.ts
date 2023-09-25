import { Module } from '@nestjs/common';
import { SamsungService } from './samsung.service';

@Module({
  providers: [SamsungService],
  exports: [SamsungService],
})
export class SamsungModule {}
