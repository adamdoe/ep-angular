import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PageErrorComponent } from './page-error.component';

@NgModule({
  declarations: [
    PageErrorComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PageErrorModule { }
