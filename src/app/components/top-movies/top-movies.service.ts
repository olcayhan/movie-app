import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/app/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TopMoviesService {
  constructor(private http: HttpClient) {}

  getPopular() {
    return this.http.get(env.apiUrl + 'popular' + env.apiKey);
  }
}
