import { Component, Input } from '@angular/core';
import { take } from 'rxjs';
import { NowPlayingService } from './now-playing.service';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent {

  @Input() selectedType: any;
  nowPlaying: any;

  constructor(private myDataService: NowPlayingService) { }

  ngOnInit(): void {
    this.myDataService
      .getNowPlaying()
      .pipe(take(1))
      .subscribe((data) => {
        this.nowPlaying = data;
      })
  }


}
