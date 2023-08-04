import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/app/environments/environment';
import { Observable } from 'rxjs';
import { Details } from 'src/app/models/details';
import { Review } from 'src/app/models/review';
import { Credits } from 'src/app/models/credits';

export interface ReviewPage {
  results: Review[];
}

export interface CreditsPage {
  cast: Credits[];
}

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(private http: HttpClient) {}

  getDetails(movieId: string): Observable<Details> {
    return this.http.get<Details>(env.apiUrl + movieId + env.apiKey);
  }
  getReviews(movieId: string): Observable<ReviewPage> {
    return this.http.get<ReviewPage>(
      env.apiUrl + movieId + '/reviews' + env.apiKey
    );
  }
  getCredits(movieId: string): Observable<CreditsPage> {
    return this.http.get<CreditsPage>(
      env.apiUrl + movieId + '/credits' + env.apiKey
    );
  }
}
