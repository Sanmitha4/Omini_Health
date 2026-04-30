import { OmitType } from '@nestjs/swagger';
import { ProductDto } from './product.dto';

export class CreateProductDto extends OmitType(ProductDto, [
  'id',
  'isDiscontinued',
] as const) {}
//if we remove the id and the isDiscontinued from here it's showcased in the  request body of the POST
//Here all the parameter we pass is getting omitted out
