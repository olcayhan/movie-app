import { take } from 'rxjs';
import { SearchService } from './search.service';
import { Component } from '@angular/core';
import { Search } from 'src/app/types/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchMovies!: Search[];
  query: string = '';
  constructor(private myDataService: SearchService) {}

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
