import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductDto } from './dto/product.dto';
import { ProductDB } from './entities/product.entity';
@Injectable()
export class ProductService {
  create(createProductDto: CreateProductDto): ProductDto | undefined {
    const maxId = Math.max(...ProductDB.map((p) => p.id));
    const newProduct: ProductDto = {
      id: maxId + 1,
      name: createProductDto.name,
      description: createProductDto.description,
      price: createProductDto.price,
      isDiscontinued: false,
    };
    ProductDB.push(newProduct);
    return newProduct;
  }

  findAll(): ProductDto[] {
    return ProductDB;
  }

  findOne(id: number): ProductDto | undefined {
    return ProductDB.find((p) => p.id === id);
  }

  update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): ProductDto | undefined {
    const product = ProductDB.find((p) => p.id === id);
    if (!product) {
      return undefined;
    }
    Object.assign(product, updateProductDto);
    return product;
  }

  remove(id: number): ProductDto | undefined {
    const productIndex = ProductDB.findIndex((p) => p.id === id);
    if (productIndex === -1) {
      return undefined;
    }

    return ProductDB.splice(productIndex, 1)[0];
  }
}
