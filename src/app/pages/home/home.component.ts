import { Component } from '@angular/core';

interface MovieType{
  id:number,
  name:string,
  href:string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})



export class HomeComponent {
  selectedType: string = 'now_playing';
  movieTypes: MovieType[] = [{id:1,name:'Now Playing',href:'now_playing'},{id:2,name:'Upcoming',href:'upcoming'}, {id:3,name:'Top Rated',href:'top_rated'}, {id:4,name:'Popular',href:'popular'}];

  setSelected(val: string) {
    this.selectedType = val;
  }
}
