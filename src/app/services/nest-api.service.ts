import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NestApiService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getListCommits(owner: string, repo: string, per_page: number = 30) {
    return this.http.get(`${this.baseUrl}/repos/${owner}/${repo}/commits?per_page=${per_page}`);
  }
}

