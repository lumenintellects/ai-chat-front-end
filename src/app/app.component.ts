import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Message {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText: string = '';
  loading: boolean = false;
  messages: Message[] = [];

  constructor(private http: HttpClient) {}

  submitRequest() {
    if (this.inputText) {
      this.loading = true;

      const url = `http://localhost:8000/answer?query=${encodeURIComponent(this.inputText)}`;
      this.http.get(url).subscribe((data: any) => {
        const message: Message = {
          question: this.inputText,
          answer: data.answer
        };
        this.messages.push(message);
        this.loading = false;
        this.inputText = '';
      });
    }
  }
}
