import { ApiProperty } from '@nestjs/swagger';

export class CreatePhoneDto {
  @ApiProperty({
    example: '682338892',
  })
  phone: string;

  @ApiProperty({
    example: 'trainer',
  })
  module: string;

  @ApiProperty({
    example: '1',
  })
  module_id: string;
}
