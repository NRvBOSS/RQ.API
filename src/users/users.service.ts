import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private users: User[] = []; // Initialize users as an empty array

    async create(user: { username: string; email: string, password: string }): Promise<any> {
        // Implement the logic to create a user
        return {
            userId: Math.random().toString(36).substring(7), // Example userId
            username: user.username,
            email: user.email,
            password: user.password, // Ensure to hash the password in a real implementation
        };
    }

    async findOne(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email === email)
    }
}
