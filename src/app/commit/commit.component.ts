import { Component } from '@angular/core';

@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.css']
})
export class CommitComponent {
  idCommit: string = '';
  shortCommit: string = '';
  commit: any = {};
  author: any = {};

  constructor() { }

  ngOnInit() {
  }

  // copyToClipboard() {
  //   navigator.clipboard.writeText(this.idCommit);
  // }

}
