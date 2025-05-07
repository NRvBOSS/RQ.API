
import {
    BadRequestException,
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    Res,
    UseGuards
} from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(
        @Body() body: { email: string, password: string },
        @Res({ passthrough: true }) res: Response
    ) {
        if (!body.email || !body.password) {
            throw new BadRequestException('Email and password are required');
        }

        const { access_token } = await this.authService.signIn(body.email, body.password);

        res.cookie('access_token', access_token, {
            httpOnly: true,
            secure: false, // prod-da true olmalıdır
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000, // 1 gün
        });

        return { message: 'Logged in successfully' };
    }


    @HttpCode(HttpStatus.CREATED)
    @Post('register')
    async register(
        @Body() signInDto: Record<string, any>,
        @Res({ passthrough: true }) res: Response
    ) {
        const { access_token } = await this.authService.register(
            signInDto.username,
            signInDto.email,
            signInDto.password
        );

        res.cookie('access_token', access_token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000,
        });

        return { message: 'Registered and logged in successfully' };
    }


    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }


    @Post('logout')
    logout(@Res({ passthrough: true }) res: Response) {
        res.clearCookie('access_token');
        return { message: 'Logged out' };
    }
}
