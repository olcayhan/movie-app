import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/app/environments/environment';
import { Observable } from 'rxjs';
import { Search } from 'src/app/models/search';

export interface SearchPage {
  results: Search[];
}

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getSearch(query: string): Observable<SearchPage> {
    return this.http.get<SearchPage>(
      env.searchUrl + env.apiKey + '&query=' + query
    );
  }
}
