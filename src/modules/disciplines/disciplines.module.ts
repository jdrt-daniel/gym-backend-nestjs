import { Module } from '@nestjs/common';
import { DisciplinesService } from './disciplines.service';
import { DisciplinesController } from './disciplines.controller';
import { Discipline, DisciplineShema } from './entities/discipline.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [DisciplinesController],
  providers: [DisciplinesService],
  imports: [
    MongooseModule.forFeature([
      { name: Discipline.name, schema: DisciplineShema },
    ]),
  ],
})
export class DisciplinesModule {}
