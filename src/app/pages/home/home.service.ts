import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/app/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getPopular(): Observable<Object> {
    return this.http.get(env.apiUrl + 'popular' + env.apiKey);
  }
  getMovieTypes(data: string): Observable<Object> {
    return this.http.get(env.apiUrl + data + env.apiKey);
  }
}
