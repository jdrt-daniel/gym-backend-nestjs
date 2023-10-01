import { BadRequestException, NotFoundException } from '@nestjs/common';

export const handleErrors = (error: any) => {
  if (error.code === '404') throw new NotFoundException('Registry not found');

  throw new BadRequestException(error);
};

export const codeGeneration = () => {
  return Math.floor(Math.random() * 9999999);
};
