
import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    // auth.controller.ts
    @Post('login')
    async login(@Body() body: { email: string, password: string }) {
        if (!body.email || !body.password) {
            throw new BadRequestException('Email and password are required');
        }
        return this.authService.signIn(body.email, body.password);
    }

    @HttpCode(HttpStatus.OK)
    @Post('register')
    register(@Body() signInDto: Record<string, any>) {
        return this.authService.register(signInDto.username, signInDto.email, signInDto.password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}
