import { Module } from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { TrainersController } from './trainers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Trainer, TrainerSchema } from './entities/trainer.entity';

@Module({
  controllers: [TrainersController],
  providers: [TrainersService],
  imports: [
    MongooseModule.forFeature([{ name: Trainer.name, schema: TrainerSchema }]),
  ],
})
export class TrainersModule {}
