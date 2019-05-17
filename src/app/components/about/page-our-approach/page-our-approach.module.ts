import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOurApproachComponent } from './page-our-approach.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PageOurApproachComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PageOurApproachModule { }
