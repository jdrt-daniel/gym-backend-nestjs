import { Module } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { VendorsController } from './vendors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vendor, VendorSchema } from './entities/vendor.entity';

@Module({
  controllers: [VendorsController],
  providers: [VendorsService],
  imports: [
    MongooseModule.forFeature([{ name: Vendor.name, schema: VendorSchema }]),
  ],
})
export class VendorsModule {}
