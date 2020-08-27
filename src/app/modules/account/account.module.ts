import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';


@NgModule({
  declarations: [
    HomeComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
