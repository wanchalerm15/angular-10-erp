import { Component, OnInit } from '@angular/core';
import { AppURL } from 'src/app/app.url';
import { AccountURL } from 'src/app/modules/account/account.url';
import { SettingURL } from 'src/app/modules/setting/setting.url';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  appURL = AppURL;
  accountURL = AccountURL;
  settingURL = SettingURL;

  constructor() { }

  ngOnInit(): void {
  }

}
