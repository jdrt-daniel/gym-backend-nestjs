import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type PhoneDocument = HydratedDocument<Phone>;
@Schema()
export class Phone {
  @ApiProperty()
  @Prop({
    type: String,
    required: true,
  })
  phone: string;

  @ApiProperty()
  @Prop({
    type: String,
    required: true,
  })
  module: string;

  @ApiProperty()
  @Prop({
    type: String,
    required: true,
  })
  module_id: string;

  @ApiProperty()
  @Prop({
    type: Date,
    default: () => new Date(),
  })
  created_date: Date;

  @ApiProperty()
  @Prop({
    type: Boolean,
    default: true,
  })
  isActive: boolean;
}

export const PhoneSchema = SchemaFactory.createForClass(Phone);
