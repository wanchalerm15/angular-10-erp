import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout2Component } from './layout2.component';
import { RouterModule } from '@angular/router';
import { SharedsModule } from 'src/app/shareds/shareds.module';

@NgModule({
  declarations: [Layout2Component],
  imports: [
    CommonModule,
    RouterModule,
    SharedsModule
  ],
  exports: [
    Layout2Component
  ]
})
export class Layout2Module { }
