import { IsObject, IsString } from "class-validator";

export class QuestionDto {

    id: Number;
    @IsString()
    text: string;

    @IsObject()
    options: Record<string, string>;

    @IsString()
    correct: string;
}