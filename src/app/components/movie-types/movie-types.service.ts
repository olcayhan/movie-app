import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/app/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class MovieTypesService {
  constructor(private http: HttpClient) {}

  getMovieTypes(data: any) {
    return this.http.get(env.apiUrl + data + env.apiKey);
  }
}
