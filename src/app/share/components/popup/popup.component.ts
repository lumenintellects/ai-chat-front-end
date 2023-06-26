import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})

export class PopupComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {}

  public openPopup() {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '400px',
      data: 'documents',
    });
  }

}
