import { Controller, Get } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizServices: QuizService) {}

    @Get()
    async getAllQuizzes(){
        return await this.quizServices.getAllQuizzes();
    }
}
