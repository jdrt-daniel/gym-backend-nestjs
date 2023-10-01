import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { FilesService } from './files.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Files')
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Get(':name')
  findByName(@Res() res: Response, @Param('name') name: string) {
    const path = this.filesService.getPathFile(name);

    res.sendFile(path);
  }
}
