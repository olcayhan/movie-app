import { Component, Input } from '@angular/core';
import { take } from 'rxjs';
import { UpcomingService } from './upcoming.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent {
  @Input() selectedType: any;
  upComing: any;


  constructor(private myDataService: UpcomingService) { }

  ngOnInit(): void {
    this.myDataService
      .getUpcoming()
      .pipe(take(1))
      .subscribe((data) => {
        this.upComing = data;
      })
  }

}
