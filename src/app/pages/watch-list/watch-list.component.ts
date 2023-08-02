import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Details } from 'src/app/models/details';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss'],
})
export class WatchListComponent {
  constructor(private http: HttpClient) {}
  local: string | null = localStorage.getItem('watchlist');
  watchlist: string[] = this.local ? JSON.parse(this.local) : [];
  movies: Details[] = [];

  getDetails(movieId: string) {
    this.http
      .get(
        'https://api.themoviedb.org/3/movie/' +
          movieId +
          '?api_key=2937a1755f75e11815ec137a11f8c4b3'
      )
      .subscribe((response: any) => {
        this.movies.push(response);
      });
  }

  ngOnInit() {
    this.watchlist.map((item) => {
      this.getDetails(item);
    });
  }
}
