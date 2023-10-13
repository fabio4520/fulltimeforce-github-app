import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css']
})
export class CommitComponent {
  @Input() commitData: any;

  commit: any = {};
  author: any = {};

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    this.commit = this.commitData.commit;
    this.author = this.commitData.author;
    this.commit.date = this.datePipe.transform(this.commit.author.date, 'MMM d, yyyy');
  }

}
