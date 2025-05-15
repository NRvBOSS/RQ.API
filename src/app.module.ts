import { Module } from '@nestjs/common';
import { QuestionModule } from './question/question.module';
import { PrismaModule } from './prismaFile/prisma.module';
import { PrismaService } from './prismaFile/prisma.service';
// import { AuthModule } from './auth/auth.module';
// import { UsersModule } from './users/users.module';
import { QuizModule } from './quiz/quiz.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [QuestionModule, PrismaModule, QuizModule, ConfigModule.forRoot({
    isGlobal: true
  })],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
