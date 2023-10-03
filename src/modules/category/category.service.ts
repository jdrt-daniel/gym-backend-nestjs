import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { handleErrors } from 'src/common/utils';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {

  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel:Model<Category> 
  ){}

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const item = new this.categoryModel(createCategoryDto);
      return item.save()
    } catch (error) {
      handleErrors(error)
    }
  }

  async findAll() {
    try {
      return await this.categoryModel.find();
    } catch (error)   {
      handleErrors(error)
    }
  }

  async findOne(id: string) {
    const item =await this.categoryModel.findById(id);
    if (!item)
      throw new NotFoundException(`Item with id ${id}, not found`)
    return item
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    this.findOne(id);
    try {
      return  await this.categoryModel.findByIdAndUpdate({_id:id}, updateCategoryDto)
    } catch (error) {
      handleErrors(error)
    }   
  }

  async remove(id: string) {
    
    try {
      const item=await this.findOne(id);
      item.deleted = true;
      item.save();
      return `Item with id ${id} deleted successflly`
    } catch (error) {
      handleErrors(error)
    }   
  }
}
