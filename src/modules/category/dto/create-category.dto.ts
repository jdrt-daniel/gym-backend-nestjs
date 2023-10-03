import { ApiProperty } from "@nestjs/swagger";

export class CreateCategoryDto {

    @ApiProperty({
        example:'Category #1'
    })
    name: string;
}
