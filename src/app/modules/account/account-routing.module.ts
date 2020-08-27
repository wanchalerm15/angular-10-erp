import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { AccountURL } from './account.url';

const children: Routes = [
  { path: AccountURL.home, component: HomeComponent },
  { path: AccountURL.info, component: InfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(children)],
  exports: [
    RouterModule
  ]
})
export class AccountRoutingModule { }
