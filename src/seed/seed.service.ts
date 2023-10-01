import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role } from 'src/modules/roles/entities/role.entity';
import { User } from 'src/modules/users/entities/user.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    @InjectModel(Role.name)
    private readonly rolModel: Model<Role>,
  ) {}

  async executeSeed() {
    await this.userModel.deleteMany({}); // delete * from users;
    await this.rolModel.deleteMany({}); // delete * from users;

    const user = new this.userModel({
      name: 'ADMIN',
      lastname: 'ADMIN',
    });
    user.save();

    const role = [
      {
        name: 'ADMIN',
        created_by: user._id,
        modified_by: user._id,
      },
      {
        name: 'USER',
        created_by: user._id,
        modified_by: user._id,
      },
    ];

    await this.rolModel.insertMany(role);

    return 'Seed Executed';
  }
}
