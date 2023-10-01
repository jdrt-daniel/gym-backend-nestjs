import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';

import { handleErrors } from 'src/common/utils';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role.name)
    private readonly roleModel: Model<Role>,
  ) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    try {
      const role = new this.roleModel(createRoleDto);
      return role.save();
    } catch (error) {
      handleErrors(error);
    }
  }

  findAll(paginationDto: PaginationDto): Promise<Role[]> {
    const { limit = 10, offset = 0 } = paginationDto;

    return this.roleModel.find().limit(limit).skip(offset).sort({
      created_date: 1,
    });
  }

  async findOne(id: string): Promise<Role> {
    let role: Role;

    // MongoID
    if (!role && isValidObjectId(id)) {
      role = await this.roleModel.findById(id);
    }

    if (!role)
      throw new NotFoundException(`Registry with id "${id}" not found`);

    return role;
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    try {
      const role = await this.roleModel.findOneAndUpdate(
        { _id: id },
        updateRoleDto,
      );
      return role;
    } catch (error) {
      handleErrors(error);
    }
  }

  async remove(id: string) {
    try {
      const role = await this.roleModel.findOneAndUpdate(
        { _id: id },
        {
          deleted: true,
        },
      );
      return role;
    } catch (error) {
      handleErrors(error);
    }
  }
}
