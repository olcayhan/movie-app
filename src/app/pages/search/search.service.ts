import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/app/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getSearch(query: string): Observable<Object> {
    return this.http.get(env.searchUrl + env.apiKey + '&query=' + query);
  }
}
