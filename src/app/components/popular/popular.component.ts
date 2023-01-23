import { Component, Input } from '@angular/core';
import { take } from 'rxjs';
import { PopularService } from './popular.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
  @Input() selectedType: any;
  popular: any;

  constructor(private myDataService: PopularService) { }

  ngOnInit(): void {

   
    this.myDataService.getPopular().subscribe((data) => {
      this.popular = data;
    })

  }
}
