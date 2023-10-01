import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/modules/users/entities/user.entity';

export type RoleDocument = HydratedDocument<Role>;

@Schema()
export class Role {
  @ApiProperty()
  @Prop({
    type: String,
    maxlength: 150,
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  created_by: User;

  @ApiProperty()
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  })
  modified_by: User;

  @ApiProperty()
  @Prop({
    type: Boolean,
    default: false,
  })
  deleted: boolean;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
