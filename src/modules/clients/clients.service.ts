import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { handleErrors } from 'src/common/utils';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from './entities/client.entity';
import { Model } from 'mongoose';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name)
    private readonly clientModel: Model<Client>,
  ) {}

  create(createClientDto: CreateClientDto) {
    try {
      const client = new this.clientModel(createClientDto);
      client.save();
      return client.toJSON();
    } catch (error) {
      handleErrors(error);
    }
  }

  async findAll(): Promise<CreateClientDto[]> {
    try {
      const data = await this.clientModel.find().sort({ created_date: -1 });
      return data.map((item) => {
        return {
          id: item._id,
          ...item.toJSON(),
        };
      });
    } catch (error) {
      handleErrors(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
