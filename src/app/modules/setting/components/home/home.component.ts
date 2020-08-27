import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private gbService: GlobalService,
    private lcService: LocalService
  ) { }

  ngOnInit(): void {
    // this.lcService.title = Math.random().toString();
    // console.log(this.gbService.title);
    console.log(this.lcService.title);
  }

}
