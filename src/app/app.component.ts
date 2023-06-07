import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from "./chat-client/chat-client.component";
import {delay, of} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  loading: boolean = false;
  messages: Message[] = [];

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  public submitRequest(inputText: string): void {
    if (!inputText) {
      return;
    }
    this.loading = true;

    const url = `http://localhost:8000/answer?query=${encodeURIComponent(inputText)}`;

    // of({answer: 'I\'m sorry, I don\'t have enough context to answer your question accurately. Could you please provide me with more information about the situation?'})
    //   .pipe(delay(1500))
    this.http.get(url)
      .subscribe((data: any) => {
      const message: Message = {
        question: inputText,
        answer: data.answer
      };
      this.messages = [...this.messages, message];
      this.loading = false;
      this.cdr.detectChanges(); // should be deleted after HTTP service implementation
    });
  }
}
