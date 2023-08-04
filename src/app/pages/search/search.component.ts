import { take } from 'rxjs';
import { SearchPage, SearchService } from './search.service';
import { Component } from '@angular/core';
import { Search } from 'src/app/models/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchMovies?: Search[];

  constructor(private myDataService: SearchService) {}

  getSearchMovies(query: string): void {
    this.myDataService
      .getSearch(query)
      .pipe(take(1))
      .subscribe((data: SearchPage) => {
        this.searchMovies = data.results;
      });
  }

  searchFilter(event: Event): void {
    const searchQuery = (event.target as HTMLInputElement).value;
    this.getSearchMovies(searchQuery);
  }
}
