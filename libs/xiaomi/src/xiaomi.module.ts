import { Module } from '@nestjs/common';
import { XiaomiService } from './xiaomi.service';

@Module({
  providers: [XiaomiService],
  exports: [XiaomiService],
})
export class XiaomiModule {}
