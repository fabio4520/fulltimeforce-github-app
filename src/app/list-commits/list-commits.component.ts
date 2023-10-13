import { Component } from '@angular/core';
import { NestApiService } from '../services/nest-api.service';

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

  constructor(private nestApiService: NestApiService) { }

  ngOnInit(): void {
    this.owner = 'fabio4520'
    this.repo = 'fulltimeforce-app'
    this.nestApiService.getListCommits(this.owner, this.repo).subscribe(
      (data: any) => {
        this.dates = Object.keys(data);
        this.commits = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
