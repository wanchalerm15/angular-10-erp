import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Layout2Component } from 'src/app/layouts/layout2/layout2.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { SettingURL } from './setting.url';

const children: Routes = [
  { path: SettingURL.home, component: HomeComponent },
  { path: SettingURL.info, component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(children)],
  exports: [
    RouterModule
  ]
})
export class SettingRoutingModule { }
