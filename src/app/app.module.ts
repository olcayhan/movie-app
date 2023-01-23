import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { WatchListComponent } from './pages/watch-list/watch-list.component';
import { TopMoviesComponent } from './components/top-movies/top-movies.component';
import { DetailsComponent } from './pages/details/details.component';
import {HttpClientModule } from '@angular/common/http';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { TopratedComponent } from './components/toprated/toprated.component';
import { PopularComponent } from './components/popular/popular.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    WatchListComponent,
    TopMoviesComponent,
    DetailsComponent,
    NowPlayingComponent,
    UpcomingComponent,
    TopratedComponent,
    PopularComponent,
  ],
    imports: [
        BrowserModule,
        RouterOutlet,
        AppRoutingModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
