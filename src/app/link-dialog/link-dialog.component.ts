import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-link-dialog',
  templateUrl: './link-dialog.component.html',
  styleUrls: ['./link-dialog.component.css']
})
export class LinkDialogComponent {

  url: string = '';

  constructor(
    public dialogRef: MatDialogRef<LinkDialogComponent>,
  ) {
    dialogRef.disableClose = true;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  closeDialog(link: string) {
    this.dialogRef.close(link);
  }

}
