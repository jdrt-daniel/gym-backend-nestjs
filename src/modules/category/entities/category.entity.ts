import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {

  @ApiProperty()
  @Prop({
    type: String,
    required: true,
  })
  name: string;

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
export const CategorySchema = SchemaFactory.createForClass(Category);
