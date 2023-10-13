import { Component } from '@angular/core';
import { NestApiService } from '../services/nest-api.service';
import { LinkDialogComponent } from '../link-dialog/link-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-commits',
  templateUrl: './list-commits.component.html',
  styleUrls: ['./list-commits.component.css']
})
export class ListCommitsComponent {
  title = 'fulltimeforce-app';
  commits: any = {};
  dates: string[] = [];
  owner: string = '';
  repo: string = '';
  submited: boolean = false;
  loading: boolean = false;
  isError: boolean = false;
  error: string = '';

  constructor(private nestApiService: NestApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LinkDialogComponent, {
      width: '800px', // Set the dialog's width as desired
      height: '100px', // Set the dialog's height as desired
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;
      // Handle the result (the link entered by the user)
      // input = 'https://github.com/fabio4520/coding-interview-university'
      const input = result;
      const inputArray = input.split('/');
      this.owner = inputArray[3];
      this.repo = inputArray[4];

      if (!this.owner || !this.repo) {
        this.isError = true;
        this.error = 'Invalid link. Follow this format: https://github.com/OWNER/REPONAME';
        return;
      }

      this.fetchCommits();
    });
  }

  fetchCommits() {
    this.submited = false;
    this.loading = true;
    this.nestApiService.getListCommits(this.owner, this.repo).subscribe(
      // My response will be an object with success and commits properties
      (data: any) => {
        if (data.success) {
          this.dates = Object.keys(data);
          this.commits = data;
          this.submited = true;
          this.loading = false;
        } else {
          this.isError = true;
          this.error = data.message;
          this.loading = false;
        }
      },
      (error) => {
        console.error(error);
        this.loading = false;
        this.isError = true;
        this.error = error.message;
      }
    );
  }

}
