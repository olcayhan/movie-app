import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HomeService } from './home.service';
import { Details } from 'src/app/models/details';

interface MovieType {
  id: number;
  name: string;
  href: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedType: string = 'now_playing';
  popular: Details[] = [];
  movieType: Details[] = [];

  movieTypes: MovieType[] = [
    { id: 1, name: 'Now Playing', href: 'now_playing' },
    { id: 2, name: 'Upcoming', href: 'upcoming' },
    { id: 3, name: 'Top Rated', href: 'top_rated' },
    { id: 4, name: 'Popular', href: 'popular' },
  ];

  constructor(private myDataService: HomeService) {}
  getSelectedMovies(): void {
    this.myDataService
      .getMovieTypes(this.selectedType)
      .subscribe((data: any) => (this.movieType = data.results));
  }

  getPopularMovies(): void {
    this.myDataService.getPopular().subscribe((data: any) => {
      this.popular = data.results.slice(0, 5);
    });
  }
  ngOnInit() {
    this.getPopularMovies();
    this.getSelectedMovies();
  }

  setSelected(val: string): void {
    this.selectedType = val;
    this.getSelectedMovies();
  }
}
