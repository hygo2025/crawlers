import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MotorolaModule } from '@app/motorola';

@Module({
  imports: [MotorolaModule],
  controllers: [AppController],
})
export class AppModule {}
