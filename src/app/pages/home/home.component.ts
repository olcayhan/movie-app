import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedType = "nowplaying";
  
  setSelected(val: any) {
    this.selectedType = val;
  }


}
