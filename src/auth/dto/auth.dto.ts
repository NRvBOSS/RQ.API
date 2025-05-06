import { IsEmail, IsString } from "class-validator";

export class SignInDto {

    @IsString()
    username: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;

}