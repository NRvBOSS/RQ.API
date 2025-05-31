import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { QuestionDto } from './dto/question.dto';
import { QuestionService } from './question.service';
import { PrismaService } from 'src/prismaFile/prisma.service';

@Controller('questions')
export class QuestionController {
    [x: string]: any;
    constructor(private readonly questionService: QuestionService,
        private readonly prisma: PrismaService
    ) { }

    @Post('many')
    async createMany(@Body() questions: QuestionDto[]) {
        return this.questionService.createMany(questions);
    }


    @Delete('delete')
    async deleteAll() {
        return await this.questionService.deleteMany();
    }

    @Get()
    async getAllQuestions() {
        return await this.questionService.getAllQuestions();
    }
}
