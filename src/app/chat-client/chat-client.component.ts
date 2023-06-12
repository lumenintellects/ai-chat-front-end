import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

export interface Message {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-chat-client',
  templateUrl: './chat-client.component.html',
  styleUrls: ['./chat-client.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatClientComponent {

  @Input() messages: Message[] = [];
  @Input() isLoading = false;
  @Output() onSend = new EventEmitter<string>();
  public inputText = '';

  constructor() {}

  public submitRequest() {
    this.onSend.emit(this.inputText.trim());
  }
}
