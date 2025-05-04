import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuestionDto } from './dto/question.dto';
import { QuestionService } from './question.service';

@Controller('questions')
export class QuestionController {
    constructor(private readonly questionService: QuestionService) { }

    @Post('many')
    async createMany(@Body() questions: QuestionDto[]) {
        return await this.questionService.createMany(questions);
    }

    @Get()
    async getAllQuestions() {
        return await this.questionService.getAllQuestions();
    }
}
