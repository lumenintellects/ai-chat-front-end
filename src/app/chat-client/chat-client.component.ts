import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat-client',
  templateUrl: './chat-client.component.html',
  styleUrls: ['./chat-client.component.css']
})
export class ChatClientComponent {
  inputText = '';
  messages: string[] = [];
  isLoading = false;

  constructor(private http: HttpClient) {}

  sendQuery() {
    const query = this.inputText.trim();
    if (query === '') {
      return;
    }

    this.isLoading = true;
    const url = `http://localhost:8000/answer?query=${encodeURIComponent(query)}`;
    this.http.get(url).subscribe(
      (response: any) => {
        this.isLoading = false;
        this.messages.push(query);
        this.messages.push(response.answer);
        this.inputText = '';
      },
      (error) => {
        this.isLoading = false;
        console.error('An error occurred:', error);
      }
    );
  }
}
