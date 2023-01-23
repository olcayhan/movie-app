import { DetailsComponent } from './pages/details/details.component';
import { WatchListComponent } from './pages/watch-list/watch-list.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "search",
    component: SearchComponent
  },
  {
    path: "watchlist",
    component: WatchListComponent
  },
  {
    path: "details/:movieId",
    component: DetailsComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
