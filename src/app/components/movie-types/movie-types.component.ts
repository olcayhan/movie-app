import { Component, Input, OnChanges } from '@angular/core';
import { MovieTypesService } from "./movie-types.service"

@Component({
  selector: 'app-movie-types',
  templateUrl: './movie-types.component.html',
  styleUrls: ['./movie-types.component.css']
})
export class MovieTypesComponent implements OnChanges{
  movieType: any;
  @Input() selectedType: any;

  constructor(private myDataService: MovieTypesService) { }

  ngOnChanges(): void {
    this.myDataService.getData(this.selectedType).subscribe((data) => {
      this.movieType = data;
    })
  }
}
