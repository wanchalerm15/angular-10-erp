import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout1Component } from './layout1.component';
import { RouterModule } from '@angular/router';
import { SharedsModule } from 'src/app/shareds/shareds.module';

@NgModule({
  declarations: [Layout1Component],
  imports: [
    CommonModule,
    RouterModule,
    SharedsModule
  ]
})
export class Layout1Module { }
