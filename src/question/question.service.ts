import { Injectable } from '@nestjs/common';
import { QuestionDto } from './dto/question.dto';
import { PrismaService } from 'src/prismaFile/prisma.service';

@Injectable()
export class QuestionService {
    constructor(private readonly prisma: PrismaService) { }

    async deleteMany(): Promise<void> {
        // Implement the logic to delete all questions
        console.log('Deleting all questions...');
    }

    async createMany(questions: QuestionDto[]) {
        const formattedQuestions = questions.map((q) => ({
            text: q.text,
            options: q.options,
            correct: q.correct,
            id: Number(q.id), // Ensure id is a primitive number
        }));

        return this.prisma.question.createMany({
            data: formattedQuestions,
        });
    }


    async getAllQuestions() {
        const questions = await this.prisma.question.findMany();


        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }

        const shuffledQuestions = questions.map((q) => {
            const values = Object.values(q.options as { [key: string]: string });

            for (let i = values.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [values[i], values[j]] = [values[j], values[i]];
            }

            const optionKeys = ['A', 'B', 'C', 'D', 'E'];
            const shuffledOptions = values.map((value, idx) => ({
                key: optionKeys[idx],
                value,
            }));

            return {
                id: q.id,
                text: q.text,
                correct: q.correct,
                options: shuffledOptions,
            };
        });

        return shuffledQuestions;
    }
}