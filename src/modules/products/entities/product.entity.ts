import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Category } from 'src/modules/category/entities/category.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Vendor } from 'src/modules/vendors/entities/vendor.entity';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({
    type: String,
    maxlength: 150,
    required: true,
  })
  name: string;

  @Prop({
    type: mongoose.Schema.Types.Decimal128,
    required: true,
  })
  price: number;

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

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  created_by: User;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  modified_by: User;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: false,
  })
  category: Category;

  @Prop({
    type: String,
    default: 'product.png',
  })
  image: string;

  @Prop({
    type: [String],
    required: false,
  })
  gallery: [string];

  @Prop({
    type: [String],
    required: false,
  })
  tags: [string];

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: false,
  })
  vendor: Vendor;

  @Prop({
    type: Boolean,
    default: false,
  })
  recomended: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
