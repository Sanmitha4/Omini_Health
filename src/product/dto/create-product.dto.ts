
import {OmitType } from "nest@js/mapped-types";
import {ProductDto} from "./product.dto";


export class CreateProductDto extends OmitType(ProductDto,['id','isDiscounted' ]as const){}
