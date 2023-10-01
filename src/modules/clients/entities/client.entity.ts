import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';
import { codeGeneration } from 'src/common/utils';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
  @ApiProperty()
  @Prop({
    type: Number,
    required: true,
    unique: true,
    default: () => codeGeneration(),
  })
  code: number;

  @ApiProperty()
  @Prop({
    type: String,
    required: true,
  })
  nit: string;

  @ApiProperty()
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @ApiProperty()
  @Prop({
    type: String,
    required: true,
  })
  lastname: string;

  @ApiProperty()
  @Prop({
    type: String,
    default: 'user.png',
  })
  avatar: string;

  @ApiProperty()
  @Prop({
    type: String,
    default: 'M',
  })
  gender: string;

  @ApiProperty()
  @Prop({
    type: [String],
    required: false,
  })
  phones: string[];

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
    default: true,
  })
  isActive: boolean;
}
export const ClientSchema = SchemaFactory.createForClass(Client);
