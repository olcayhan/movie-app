import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(private http: HttpClient) {}

  getDetails(movieId: string) {
    return this.http.get(env.apiUrl + movieId + env.apiKey);
  }
  getReviews(movieId: string) {
    return this.http.get(env.apiUrl + movieId + '/reviews' + env.apiKey);
  }
  getCredits(movieId: string) {
    return this.http.get(env.apiUrl + movieId + '/credits' + env.apiKey);
  }
}
