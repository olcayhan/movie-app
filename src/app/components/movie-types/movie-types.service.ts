import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieTypesService {

  constructor(private http: HttpClient) { }

  getNowPlaying() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=2937a1755f75e11815ec137a11f8c4b3')
  }
  getUpcoming() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=2937a1755f75e11815ec137a11f8c4b3')
  }
  getPopular() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=2937a1755f75e11815ec137a11f8c4b3')
  }
  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=2937a1755f75e11815ec137a11f8c4b3')
  }


}
