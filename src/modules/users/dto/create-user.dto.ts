import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  lastname: string;

  @ApiProperty()
  avatar: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  created_date: Date;

  @ApiProperty()
  modified_date: Date;

  @ApiProperty({
    example: ['user'],
  })
  roles: string[];

  @ApiProperty()
  isActive: boolean;
}
