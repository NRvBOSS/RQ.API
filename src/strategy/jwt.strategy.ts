import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';

const cookieExtractor = (req: Request): string | null => {
    return req.cookies?.access_token || null;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: cookieExtractor,
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || 'default_secret', // Ensure a fallback value is provided
        });
    }

    async validate(payload: any) {
        return { userId: payload.sub, username: payload.username };
    }
}
