import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MotorolaModule } from '@app/motorola';

@Module({
  imports: [MotorolaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
