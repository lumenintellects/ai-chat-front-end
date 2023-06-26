export class AnswerMsg {
  public question = '';
  public answer = '';
  public documents = '';

  constructor(init: { answer: string; question: string; documents: string }) {
    Object.assign(this, init);
  }
}
