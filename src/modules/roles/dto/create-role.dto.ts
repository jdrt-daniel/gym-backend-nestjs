import { ApiProperty } from '@nestjs/swagger';
import { IsString, Max } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty()
  @IsString()
  @Max(50)
  name: string;

  @ApiProperty()
  @IsString()
  created_by: string;

  @ApiProperty()
  @IsString()
  modified_by: string;
}
