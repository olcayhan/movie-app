import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpcomingService {

  constructor(private http: HttpClient) { }

  getUpcoming() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=2937a1755f75e11815ec137a11f8c4b3')
  }

}
