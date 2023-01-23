import { TestBed } from '@angular/core/testing';

import { TopratedService } from './toprated.service';

describe('TopratedService', () => {
  let service: TopratedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopratedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
