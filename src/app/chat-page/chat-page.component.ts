import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CommonModule} from "@angular/common";
import {AnswerMsg} from "@core/models";
import {AnswersListComponent} from "@shared/components";
import {delay, of} from "rxjs";
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ChatHttpServiceService } from '@shared/services';
import { MatDialog } from '@angular/material/dialog';
import {PopupComponent} from "@shared/components";

@UntilDestroy()
@Component({
  selector: 'chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
  standalone: true,
  imports: [ CommonModule, HttpClientModule, AnswersListComponent ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatPageComponent {
  loading: boolean = false;
  messages: AnswerMsg[] = [];

  constructor(private httpService: ChatHttpServiceService, private cdr: ChangeDetectorRef, private dialog: MatDialog) {}

  public submitRequest(inputText: string): void {
    if (!inputText) {
      return;
    }
    this.loading = true;
    this.httpService.getAnswers(inputText)
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        this.messages = [...this.messages, data];
        this.loading = false;
        // this.cdr.detectChanges(); // should be deleted after HTTP service implementation
      })
  }

  public openPopup() {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '400px',
      data: 'documents',
    });
  }

}
