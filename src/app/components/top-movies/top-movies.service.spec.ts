import { TestBed } from '@angular/core/testing';

import { TopMoviesService } from './top-movies.service';

describe('TopMoviesService', () => {
  let service: TopMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
