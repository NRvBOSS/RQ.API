// dto/create-quiz.dto.ts
export class CreateQuizDto {
    title: string;
    userId: string;
    questions: {
        text: string;
        options: Record<string, string>;  // "A", "B", "C", "D", "E"
        correct: string;
    }[];
}
