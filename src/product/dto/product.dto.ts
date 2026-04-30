import { IsNotEmpty } from 'class-validator';

export class ProductDto {
  id!: number;

  
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name!: string;

  
@IsString()
  @MaxLength(100)
  description!: string;

  @IsNumber()
  @Min(100)
  price!: number;

  @IsOptional()
  @IsBoolean()

  isDiscounted!: boolean;
}
