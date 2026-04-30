import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { ProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been succesfully created',
    type: ProductDto,
  })
  @ApiBadRequestResponse({ description: 'Invalid input data ' })
  create(@Body() createProductDto: CreateProductDto) {
    const product = this.productService.create(createProductDto);
    if (!product) throw new NotFoundException('Product is not created');
    return product;
  }

  @Get()
  @ApiOkResponse({ description: 'List of all products', type: [ProductDto] })
  findAll(): ProductDto[] {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const product = this.productService.findOne(+id);
    if (!product) {
      throw new NotFoundException(
        `The product with id number ${id} is not found in our system `,
      );
    }
    return product;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    const product = this.productService.update(+id, updateProductDto);
    if (!product) {
      throw new NotFoundException(
        `Couldn't update the product with id number  ${id} `,
      );
    }
    return product;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const deletedProduct = this.productService.remove(+id);
    if (!deletedProduct) {
      throw new NotFoundException(
        `Couldn't delete product with id number${id}`,
      );
    }
    return deletedProduct;
  }
}
