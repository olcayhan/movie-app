import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/app/environments/environment';
import { Observable } from 'rxjs';
import { Details } from 'src/app/models/details';

export interface PageMovies {
  results: Details[];
}

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getPopular(): Observable<{ results: Details[] }> {
    return this.http.get<{ results: Details[] }>(
      env.apiUrl + 'popular' + env.apiKey
    );
  }
  getMovieTypes(data: string): Observable<PageMovies> {
    return this.http.get<PageMovies>(env.apiUrl + data + env.apiKey);
  }
}
