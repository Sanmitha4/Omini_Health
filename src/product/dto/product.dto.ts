import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class ProductDto {
  @IsNumber()
  @ApiProperty({ description: 'The unique identifier product ', example: 1 })
  id!: number;

  @IsNotEmpty()
  @ApiProperty({ description: 'The  product name ', example: 'Laptop' })
  @IsString()
  @MaxLength(100)
  name!: string;

  @IsString()
  @MaxLength(500)
  @ApiProperty({
    description: 'The description of the product',
    example: 'A appliance',
  })
  description!: string;

  @IsPositive()
  @ApiProperty({ description: 'The price of the product', example: 77000 })
  price!: number;

  @IsOptional()
  @IsBoolean()
  //used for designing the output of the page in swagger
  @ApiProperty({
    description: 'The product is in discounted range',
    example: false,
  })
  isDiscounted!: boolean;
}
