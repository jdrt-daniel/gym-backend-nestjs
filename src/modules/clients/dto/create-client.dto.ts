import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty({
    type: String,
    example: '',
  })
  nit: string;

  @ApiProperty({
    type: String,
    example: '',
  })
  name: string;

  @ApiProperty({
    type: String,
    example: '',
  })
  lastname: string;

  @ApiProperty({
    type: String,
    example: 'default.png',
  })
  avatar: string;

  @ApiProperty({
    type: String,
    example: 'M',
  })
  gender: string;

  @ApiProperty({
    type: [String],
  })
  phones: string[];

  @ApiProperty({
    type: Boolean,
    example: true,
  })
  isActive: boolean;
}
