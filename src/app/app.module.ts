import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { WatchListComponent } from './pages/watch-list/watch-list.component';
import { TopMoviesComponent } from './components/top-movies/top-movies.component';
import { DetailsComponent } from './pages/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieTypesComponent } from './components/movie-types/movie-types.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { CastMoviesComponent } from './components/cast-movies/cast-movies.component';
import { ReviewMoviesComponent } from './components/review-movies/review-movies.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    WatchListComponent,
    TopMoviesComponent,
    DetailsComponent,
    MovieTypesComponent,
    LoadingBarComponent,
    CastMoviesComponent,
    ReviewMoviesComponent,
  ],
  imports: [BrowserModule, RouterOutlet, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
