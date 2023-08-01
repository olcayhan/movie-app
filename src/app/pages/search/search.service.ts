import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getSearch(query: string) {
    return this.http.get(env.searchUrl + env.apiKey + '&query=' + query);
  }
}
