import { Component, Input } from '@angular/core';
import { Credits } from 'src/app/models/credits';

@Component({
  selector: 'app-cast-movies',
  templateUrl: './cast-movies.component.html',
  styleUrls: ['./cast-movies.component.scss'],
})
export class CastMoviesComponent {
  @Input() selectNav: string = '';
  @Input() credits: Credits[] = [];
}
