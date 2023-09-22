import { Module } from '@nestjs/common';
import { MotorolaService } from './motorola.service';
import { CrawlerService } from './crawler.service';

@Module({
  providers: [MotorolaService, CrawlerService],
  exports: [MotorolaService],
})
export class MotorolaModule {}
