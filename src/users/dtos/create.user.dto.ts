// user dto

import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'O campo senha não pode ser vazio' })
  @IsString({
    message: 'lutfen sifrenizi giriniz',
  })
  password: string;
}
