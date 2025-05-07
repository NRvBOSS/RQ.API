import { Module } from '@nestjs/common';
import { QuestionModule } from './question/question.module';
import { PrismaModule } from './prismaFile/prisma.module';
import { PrismaService } from './prismaFile/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { QuizModule } from './quiz/quiz.module';

@Module({
  imports: [QuestionModule, PrismaModule, AuthModule, UsersModule, QuizModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
