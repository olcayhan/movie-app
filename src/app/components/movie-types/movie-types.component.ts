import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Details } from 'src/app/models/details';

@Component({
  selector: 'app-movie-types',
  templateUrl: './movie-types.component.html',
  styleUrls: ['./movie-types.component.scss'],
})
export class MovieTypesComponent {
  @Input() movieType: Details[] = [];
  constructor() {}
}
