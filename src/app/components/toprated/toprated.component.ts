import { Component, Input } from '@angular/core';
import { TopratedService } from './toprated.service';

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.css']
})
export class TopratedComponent {
  topRated: any;
  @Input() selectedType: any;

  constructor(private myDataService: TopratedService) { }

  ngOnInit(): void{
     this.myDataService.getTopRated().subscribe((data) => {
      this.topRated = data;
    })
  }
}
