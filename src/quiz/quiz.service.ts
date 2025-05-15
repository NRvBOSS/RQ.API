import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prismaFile/prisma.service';

@Injectable()
export class QuizService {
    constructor(private readonly prisma : PrismaService) {}

    async getAllQuizzes(): Promise<void> {
        const quizzes = await this.prisma.quiz.findMany();
        return;
    }
}
