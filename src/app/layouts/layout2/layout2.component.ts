import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout2',
  templateUrl: './layout2.component.html',
  styleUrls: ['./layout2.component.scss']
})
export class Layout2Component implements OnInit {

  @Input('title') title: string = 'No title';

  constructor() { }

  ngOnInit(): void {
  }

}
