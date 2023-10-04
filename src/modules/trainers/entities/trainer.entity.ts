import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type TrainerDocument = HydratedDocument<Trainer>;

@Schema()
export class Trainer {
  @ApiProperty()
  @Prop({
    type: Date,
    default: () => new Date(),
  })
  created_date: Date;

  @ApiProperty()
  @Prop({
    type: Date,
    default: () => new Date(),
  })
  modified_date: Date;

  @ApiProperty()
  @Prop({
    type: Boolean,
    default: false,
  })
  deleted: boolean;
}

export const TrainerSchema = SchemaFactory.createForClass(Trainer);
