import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sale, SaleSchema } from './entities/sale.entity';

@Module({
  controllers: [SalesController],
  providers: [SalesService],
  imports: [
    MongooseModule.forFeature([{ name: Sale.name, schema: SaleSchema }]),
  ],
})
export class SalesModule {}
