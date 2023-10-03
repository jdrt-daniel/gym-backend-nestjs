import { Module } from '@nestjs/common';
import { SubscribesService } from './subscribes.service';
import { SubscribesController } from './subscribes.controller';

@Module({
  controllers: [SubscribesController],
  providers: [SubscribesService],
})
export class SubscribesModule {}
