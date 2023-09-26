import { Module } from '@nestjs/common';
import { MotorolaService } from './service/motorola.service';
import { CrawlerService } from './service/crawler.service';
import { SpecificationService } from './service/specification.service';

@Module({
  providers: [MotorolaService, CrawlerService, SpecificationService],
  exports: [MotorolaService],
})
export class MotorolaModule {}
