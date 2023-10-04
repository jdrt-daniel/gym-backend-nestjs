import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type CalendarDocument = HydratedDocument<Calendar>;
@Schema()
export class Calendar {
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
export const CalendarSchema = SchemaFactory.createForClass(Calendar);
