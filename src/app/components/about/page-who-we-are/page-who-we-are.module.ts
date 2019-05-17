import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageWhoWeAreComponent } from './page-who-we-are.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PageWhoWeAreComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PageWhoWeAreModule { }
