import { Module } from '@nestjs/common';
import { QuestionModule } from './question/question.module';
import { PrismaModule } from './prismaFile/prisma.module';
import { PrismaService } from './prismaFile/prisma.service';

@Module({
  imports: [QuestionModule, PrismaModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
