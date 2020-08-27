import { Component, OnInit, NgZone } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: number;

  constructor(
    private gbService: GlobalService,
    private lcService: LocalService,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
    // this.lcService.title = Math.random().toString();
    // console.log(this.gbService.title);
    // console.log(this.lcService.title);
    // this.gbService.setStorage('Hello World');
  }

  onClick() {

    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.ngZone.run(() => {
          this.data = Math.random();
          console.log(this.data);
        });
      }, 1000);
    });
  }

}
