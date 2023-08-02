import { Details } from 'src/app/models/details';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.scss'],
})
export class TopMoviesComponent {
  @Input() popular: Details[] = [];
  x: number = 0;

  constructor() {}

  nextImg() {
    this.x -= 100;
  }
  backImg() {
    this.x += 100;
  }
}
