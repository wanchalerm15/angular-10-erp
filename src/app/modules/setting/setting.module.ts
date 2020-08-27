import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';


@NgModule({
  declarations: [
    HomeComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
