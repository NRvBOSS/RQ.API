import { Controller, Delete, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    async getAllUsers() {
        return await this.userService.getAllUsers()
    }

    @Delete('delete')
    async deleteAll() {
        return await this.userService.deleteMany()
    }
}
