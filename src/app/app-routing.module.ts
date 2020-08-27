import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppURL } from './app.url';

const routes: Routes = [
  { path: AppURL.account, loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule) },
  { path: AppURL.setting, loadChildren: () => import('./modules/setting/setting.module').then(m => m.SettingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
