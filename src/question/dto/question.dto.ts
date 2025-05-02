import { IsObject, IsString } from "class-validator";

export class QuestionDto {
    @IsString()
    text: string;

    @IsObject()
    options: Record<string, string>;

    @IsString()
    correct: string;
}