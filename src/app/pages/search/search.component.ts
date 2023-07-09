import { take } from 'rxjs';
import { SearchService } from './search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private myDataService: SearchService) {}

  searchMovies: any | undefined = undefined;
  query: string = '';

  searchFilter(e: any) {
    this.query = e.target.value;
    this.myDataService
      .getSearch(this.query)
      .pipe(take(1))
      .subscribe((data: any) => {
        this.searchMovies = data.results;
      });
  }
}
