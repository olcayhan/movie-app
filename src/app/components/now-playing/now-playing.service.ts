import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NowPlayingService {

  constructor(private http: HttpClient) { }

  getNowPlaying() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=2937a1755f75e11815ec137a11f8c4b3')
  }

}
