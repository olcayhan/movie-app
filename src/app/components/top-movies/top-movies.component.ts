import { TopMoviesService } from './top-movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css'],
})
export class TopMoviesComponent implements OnInit {
  popular: any;
  x = 0;

  constructor(private myDataService: TopMoviesService) {}

  nextImg() {
    this.x -= 200;
  }
  backImg() {
    this.x += 200;
  }

  ngOnInit(): void {
    this.myDataService.getPopular().subscribe((data: any) => {
      this.popular = data.results.slice(0, 5);
    });
  }
}
