import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Offer, OfferSchema } from './entities/offer.entity';

@Module({
  controllers: [OffersController],
  providers: [OffersService],
  imports: [
    MongooseModule.forFeature([{ name: Offer.name, schema: OfferSchema }]),
  ],
})
export class OffersModule {}
