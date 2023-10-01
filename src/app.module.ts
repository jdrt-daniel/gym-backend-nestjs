import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';

import { FilesModule } from './files/files.module';
import { AuthModule } from './auth/auth.module';
import { SeedModule } from './seed/seed.module';
import { ModulesModule } from './modules/modules.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_DB, {
      dbName: process.env.MONGO_NAME,
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASS,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    //MODULES

    AuthModule,
    FilesModule,
    SeedModule,
    ModulesModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
