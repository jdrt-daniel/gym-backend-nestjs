import { Module } from '@nestjs/common';

import { ClientsModule } from './clients/clients.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { MenusModule } from './menus/menus.module';
import { TrainersModule } from './trainers/trainers.module';
import { SalesModule } from './sales/sales.module';
import { CalendarModule } from './calendar/calendar.module';
import { ProductsModule } from './products/products.module';
import { OffersModule } from './offers/offers.module';
import { VendorsModule } from './vendors/vendors.module';
import { CategoryModule } from './category/category.module';
import { DisciplinesModule } from './disciplines/disciplines.module';
import { SubscribesModule } from './subscribes/subscribes.module';
import { PhonesModule } from './phones/phones.module';

@Module({
  imports: [
    ClientsModule,
    UsersModule,
    RolesModule,
    MenusModule,
    TrainersModule,
    SalesModule,
    CalendarModule,
    ProductsModule,
    OffersModule,
    VendorsModule,
    CategoryModule,
    DisciplinesModule,
    SubscribesModule,
    PhonesModule,
  ],
  exports: [
    ClientsModule,
    UsersModule,
    RolesModule,
    MenusModule,
    TrainersModule,
    SalesModule,
    CalendarModule,
    ProductsModule,
    OffersModule,
    VendorsModule,
    CategoryModule,
  ],
})
export class ModulesModule {}
