import { ApiProperty } from "@nestjs/swagger";

export class CreateDisciplineDto {
    @ApiProperty()
    name: string;
  
}
