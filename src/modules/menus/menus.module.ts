import { Module } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenusController } from './menus.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Menu, MenuSchema } from './entities/menu.entity';

@Module({
  controllers: [MenusController],
  providers: [MenusService],
  imports: [
    MongooseModule.forFeature([{ name: Menu.name, schema: MenuSchema }]),
  ],
})
export class MenusModule {}
