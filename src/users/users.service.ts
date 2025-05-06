import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaFile/prisma.service';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) { }

    async getAllUsers() {
        return await this.prisma.user.findMany();
    }

    async deleteMany() {
        return await this.prisma.user.deleteMany();
    }

    async create(user: { username: string; email: string; password: string }) {
        return this.prisma.user.create({
            data: {
                username: user.username,
                email: user.email,
                password: user.password,
            },
        });
    }

    async findByEmail(email: string) {
        if (!email) {
            console.log('Email is empty!'); // Debug üçün
            return null;
        }

        console.log('Searching for email:', email); // Debug üçün

        const user = await this.prisma.user.findUnique({
            where: { email: email },
        });

        console.log('Found user:', user); // Debug üçün
        return user;
    }
}