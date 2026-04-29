import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDB } from './entities/user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto):UserDto {
    const maxId=Math.max(...UserDB.map(u=>u.id));
    const newUser={
      id:maxId+1;
      name:createUserDto.name,
      phone:createUserDto.phone,
      email:createUserDto.email,
      password:createUserDto.password,
      gender:createUserDto.gender,

    }
    UserDB.push(newUser)
    return newUser;
  }

  findAll() {
    return UserDB;
  }

  findOne(id: number) {
    return UserDB.find(u=>u.id===id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user=UserDB.find(u=>u.id===id);
        if(!user){
          return undefined;
        }
        Object.assign(user,updateUserDto)
        return user;
    
  }

  remove(id: number) {
    const userIndex=UserDB.findIndex(u=>u.id===id);
      if(userIndex===-1){
        return undefined;
      }
      
      return UserDB.splice(userIndex,1)[0];
  }
}
