import { Component } from '@angular/core';
import { Details } from 'src/app/models/details';
import { WatchlistService } from './watch-list.service';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss'],
})
export class WatchListComponent {
  constructor(private myDataService: WatchlistService) {}
  local: string | null = localStorage.getItem('watchlist');
  watchlist: string[] = this.local ? JSON.parse(this.local) : [];
  movies: Details[] = [];

  ngOnInit(): void {
    this.watchlist.map((item: string) => {
      this.getWatchlistMovies(item);
    });
  }

  getWatchlistMovies(movieID: string): void {
    this.myDataService.getDetails(movieID).subscribe((data: Details) => {
      this.movies.push(data);
    });
  }
}
