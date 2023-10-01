import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VendorDocument = HydratedDocument<Vendor>;

@Schema()
export class Vendor {
  @Prop({
    type: String,
    required: true,
  })
  name: string;
}
export const VendorSchema = SchemaFactory.createForClass(Vendor);
