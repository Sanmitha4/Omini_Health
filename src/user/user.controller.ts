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
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const user = this.userService.create(createUserDto);
    if (!user) throw new NotFoundException('Product is not created');
    return user;
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const user = this.userService.findOne(+id);
    if (!user) {
      throw new NotFoundException(
        `The product with id number ${id} is not found in our system `,
      );
    }
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = this.userService.update(+id, updateUserDto);
    if (!user) {
      throw new NotFoundException(
        `Couldn't update the product with id number  ${id} `,
      );
    }
    return user;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const deletedUser = this.userService.remove(+id);
    if (!deletedUser) {
      throw new NotFoundException(
        `Couldn't delete product with id number${id}`,
      );
    }
    return deletedUser;
  }
}
