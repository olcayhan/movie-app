import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopMoviesService {

  constructor(private http: HttpClient) { }

  getPopular() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=2937a1755f75e11815ec137a11f8c4b3')
  }
}
