import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { QuestionDto } from './dto/question.dto';
import { QuestionService } from './question.service';

@Controller('questions')
export class QuestionController {
    constructor(private readonly questionService: QuestionService) { }

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
