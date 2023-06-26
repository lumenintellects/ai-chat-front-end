export class AnswerMsg {
  public question = '';
  public answer = '';
  public documents: Document[] = [];
  public showDocuments = false; // Add showDocuments property

  constructor(init: Partial<AnswerMsg>) {
    Object.assign(this, init);
  }

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
