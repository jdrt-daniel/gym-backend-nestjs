import { Module } from '@nestjs/common';
import { PhonesService } from './phones.service';
import { PhonesController } from './phones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Phone, PhoneSchema } from './entities/phone.entity';

@Module({
  controllers: [PhonesController],
  providers: [PhonesService],
  imports: [
    MongooseModule.forFeature([{ name: Phone.name, schema: PhoneSchema }]),
  ],
})
export class PhonesModule {}
