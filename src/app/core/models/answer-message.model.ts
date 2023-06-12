export class AnswerMsg {
  public question = '';
  public answer = '';

  constructor(init: Partial<AnswerMsg>) {
    Object.assign(this, init);
  }
}
