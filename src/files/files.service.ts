import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {
  getPathFile(imageName: string) {
    const path = join(__dirname, '../../upload', imageName);

    console.log(path);
    if (!existsSync(path))
      throw new BadRequestException(`No product found with image ${imageName}`);

    return path;
  }
}
