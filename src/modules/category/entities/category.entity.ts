import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {
  @Prop({
    type: String,
    required: true,
  })
  name: string;

  @Prop({
    type: Date,
    default: () => new Date(),
  })
  created_date: Date;

  @Prop({
    type: Date,
    default: () => new Date(),
  })
  modified_date: Date;
}
export const CategorySchema = SchemaFactory.createForClass(Category);
