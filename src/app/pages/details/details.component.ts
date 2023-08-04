import { take } from 'rxjs';
import { CreditsPage, DetailsService, ReviewPage } from './details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from 'src/app/models/review';
import { Credits } from 'src/app/models/credits';
import { Details } from 'src/app/models/details';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  details?: Details;
  reviews: Review[] = [];
  credits: Credits[] = [];
  movieId: string = '';

  local: string | null = localStorage.getItem('watchlist');
  watchlist: string[] = this.local ? JSON.parse(this.local) : [];

  selectNav = 'about';

  constructor(
    private route: ActivatedRoute,
    private myDataService: DetailsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movieId = params['movieId'];
    });
    this.fetchData();
  }

  fetchData(): void {
    this.fetchMovieDetails();
    this.fetchReviews();
    this.fetchCredits();
  }

  private fetchMovieDetails(): void {
    this.myDataService
      .getDetails(this.movieId)
      .pipe(take(1))
      .subscribe((data: Details) => {
        this.details = data;
      });
  }

  private fetchReviews(): void {
    this.myDataService
      .getReviews(this.movieId)
      .pipe(take(1))
      .subscribe((data: ReviewPage) => {
        this.reviews = data.results;
      });
  }

  private fetchCredits(): void {
    this.myDataService
      .getCredits(this.movieId)
      .pipe(take(1))
      .subscribe((data: CreditsPage) => {
        this.credits = data.cast;
      });
  }

  saveWatchlist(): void {
    if (this.watchlist.includes(this.movieId)) {
      this.watchlist = this.watchlist.filter((item) => item !== this.movieId);
    } else {
      this.watchlist.push(this.movieId);
    }
    localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
  }

  selectedNav(val: string): void {
    this.selectNav = val;
  }
}
