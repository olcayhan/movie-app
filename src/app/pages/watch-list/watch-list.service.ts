import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/app/environments/environment';
import { Observable } from 'rxjs';
import { Search } from 'src/app/models/search';
import { Details } from 'src/app/models/details';

export interface SearchPage {
  results: Search[];
}

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  constructor(private http: HttpClient) {}

  getDetails(movieId: string): Observable<Details> {
    return this.http.get<Details>(env.apiUrl + movieId + env.apiKey);
  }
}
