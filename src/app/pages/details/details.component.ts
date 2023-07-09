import { take } from 'rxjs';
import { DetailsService } from './details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private myDataService: DetailsService
  ) {}

  details: any;
  reviews: any;
  credits: any;
  movieId: any;
  selectNav = 'about';

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movieId = params['movieId'];
    });

    this.myDataService
      .getDetails(this.movieId)
      .pipe(take(1))
      .subscribe((data) => {
        this.details = data;
      });

    this.myDataService
      .getReviews(this.movieId)
      .pipe(take(1))
      .subscribe((data: any) => {
        this.reviews = data.results;
        console.log(this.reviews);
      });

    this.myDataService
      .getCredits(this.movieId)
      .pipe(take(1))
      .subscribe((data: any) => {
        this.credits = data.cast;
      });
  }

  selectedNav(val: string) {
    this.selectNav = val;
  }
}
