import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { Layout1Module } from '../../layouts/layout1/layout1.module';
import { Layout2Module } from 'src/app/layouts/layout2/layout2.module';
import { LocalService } from 'src/app/services/local.service';

@NgModule({
  declarations: [
    HomeComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    Layout1Module,
    Layout2Module
  ],
  providers: [
    LocalService
  ]
})
export class AccountModule { }
