import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';

import { UsersModule } from 'src/modules/users/users.module';
import { RolesModule } from 'src/modules/roles/roles.module';

@Module({
  providers: [SeedService],
  controllers: [SeedController],
  imports: [UsersModule, RolesModule],
})
export class SeedModule {}
