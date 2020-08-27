import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { AccountURL } from './account.url';
import { Layout1Component } from '../../layouts/layout1/layout1.component';
import { Layout1Module } from '../../layouts/layout1/layout1.module';

const children: Routes = [
  { path: AccountURL.home, component: HomeComponent },
  { path: AccountURL.info, component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: Layout1Component, children }
  ])],
  exports: [
    RouterModule,
    Layout1Module
  ]
})
export class AccountRoutingModule { }
