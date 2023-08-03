import { Component, Input } from '@angular/core';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-review-movies',
  templateUrl: './review-movies.component.html',
  styleUrls: ['./review-movies.component.scss'],
})
export class ReviewMoviesComponent {
  @Input() selectNav: string | undefined;
  @Input() reviews: Review[] = [];
}
