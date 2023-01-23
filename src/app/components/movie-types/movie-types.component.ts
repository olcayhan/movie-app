import { take } from 'rxjs';
import { MovieTypesService } from './movie-types.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-types',
  templateUrl: './movie-types.component.html',
  styleUrls: ['./movie-types.component.css']
})
export class MovieTypesComponent implements OnInit {

  selectedType = "nowplaying";
  nowPlaying: any;
  upComing: any;
  topRated: any;
  popular: any;

  constructor(private myDataService: MovieTypesService) { }


  setSelected(val: any) {
    this.selectedType = val;
  }

  ngOnInit(): void {
    this.myDataService
      .getNowPlaying()
      .pipe(take(1))
      .subscribe((data) => {
        this.nowPlaying = data;
      })

    this.myDataService.getUpcoming().subscribe((data) => {
      this.upComing = data;
    })

    this.myDataService.getTopRated().subscribe((data) => {
      this.topRated = data;
    })

    this.myDataService.getPopular().subscribe((data) => {
      this.popular = data;
    })

  }
}
