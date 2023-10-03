import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubscribesService } from './subscribes.service';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';
import { UpdateSubscribeDto } from './dto/update-subscribe.dto';

@Controller('subscribes')
export class SubscribesController {
  constructor(private readonly subscribesService: SubscribesService) {}

  @Post()
  create(@Body() createSubscribeDto: CreateSubscribeDto) {
    return this.subscribesService.create(createSubscribeDto);
  }

  @Get()
  findAll() {
    return this.subscribesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscribesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubscribeDto: UpdateSubscribeDto) {
    return this.subscribesService.update(+id, updateSubscribeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscribesService.remove(+id);
  }
}
