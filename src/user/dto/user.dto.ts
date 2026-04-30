import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UserDto {
  id!: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name!: string;
  phone!: number;
  email!: string;
  password!: string;
  gender!: string;

  status!: 'active' | 'inactive';

  createdAt!: Date;
}
