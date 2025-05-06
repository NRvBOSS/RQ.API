
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async register(
        username: string,
        email: string,
        pass: string,
    ): Promise<{ access_token: string }> {
        const user = await this.usersService.create({
            username: username,
            email: email,
            password: pass,
        });

        const payload = { sub: user.userId, username: user.username };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async signIn(
        email: string,
        pass: string,
    ): Promise<{ access_token: string }> {
        let user = await this.usersService.findOne(email);

        // Əgər user yoxdursa, avtomatik yarad
        if (!user) {
            user = await this.usersService.create({
                username: 'defaultUsername', // Replace with a default or generated username
                email: email,
                password: pass,
            });
        }


        if (user?.password !== pass) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.userId, username: user.username };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
