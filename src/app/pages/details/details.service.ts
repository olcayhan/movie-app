import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(private http: HttpClient) {}

  getDetails(movieId: string) {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/' +
        movieId +
        '?api_key=2937a1755f75e11815ec137a11f8c4b3'
    );
  }
  getReviews(movieId: string) {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/' +
        movieId +
        '/reviews?api_key=2937a1755f75e11815ec137a11f8c4b3'
    );
  }
  getCredits(movieId: string) {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/' +
        movieId +
        '/credits?api_key=2937a1755f75e11815ec137a11f8c4b3'
    );
  }
}
