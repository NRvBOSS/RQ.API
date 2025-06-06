import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';

@Module({
  imports: [],
  providers: [QuestionService],
  controllers: [QuestionController]
})
export class QuestionModule {}
