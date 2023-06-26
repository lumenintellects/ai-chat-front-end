export interface AnswerDtoInterface {
  answer: string;
  documents: Document[];
}

export interface Document {
  question: string;
  answer: string;
  date: string;
  metadata: {
    source: string;
    row: number;
  };
}