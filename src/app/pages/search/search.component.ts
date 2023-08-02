import { take } from 'rxjs';
import { SearchService } from './search.service';
import { Component } from '@angular/core';
import { Search } from 'src/app/models/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchMovies: Search[] | undefined = undefined;
  constructor(private myDataService: SearchService) {}

  getSearchMovies(query: string): void {
    this.myDataService
      .getSearch(query)
      .pipe(take(1))
      .subscribe((data: any) => {
        this.searchMovies = data.results;
      });
    console.log(this.searchMovies);
  }

  searchFilter(e: any) {
    this.getSearchMovies(e.target.value);
  }
}
