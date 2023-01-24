import { TestBed } from '@angular/core/testing';

import { MovieTypesService } from './movie-types.service';

describe('MovieTypesService', () => {
  let service: MovieTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
