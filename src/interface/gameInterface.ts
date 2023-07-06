export interface GameType {
    id: string;
    title: string;
    description: string;
    tagIds: string[];
    imageUrl: string;
    playedCount: number;
    createdAt: string;
    createdBy: string;
    questions: QuestionType[];
}

export interface QuestionType {
    id?: string; // 추후에 ? 제거
    content: string;
}
