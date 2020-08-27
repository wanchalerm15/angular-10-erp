import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(
    private gbService: GlobalService,
    private lcService: LocalService
  ) { }

  ngOnInit(): void {
    // console.log(this.gbService.title);
    console.log(this.gbService.getStorage);
  }

}
