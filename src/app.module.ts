import { Module } from '@nestjs/common';
import { QuestionModule } from './question/question.module';
import { PrismaModule } from './prismaFile/prisma.module';
import { PrismaService } from './prismaFile/prisma.service';
// import { AuthModule } from './auth/auth.module';
// import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [QuestionModule, PrismaModule, ConfigModule.forRoot({
    isGlobal: true
  })],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
