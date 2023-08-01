import { Component, Input, OnChanges } from '@angular/core';
import { MovieTypesService } from './movie-types.service';
import { Details } from 'src/app/models/details';

@Component({
  selector: 'app-movie-types',
  templateUrl: './movie-types.component.html',
  styleUrls: ['./movie-types.component.css'],
})
export class MovieTypesComponent implements OnChanges {
  movieType!: Details[];
  @Input() selectedType: any;

  constructor(private myDataService: MovieTypesService) {}

  ngOnChanges(): void {
    this.myDataService
      .getMovieTypes(this.selectedType)
      .subscribe((data: any) => (this.movieType = data.results));
  }
}
