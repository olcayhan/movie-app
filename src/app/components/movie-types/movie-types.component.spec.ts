import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTypesComponent } from './movie-types.component';

describe('MovieTypesComponent', () => {
  let component: MovieTypesComponent;
  let fixture: ComponentFixture<MovieTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
