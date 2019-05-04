import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContactUsComponent } from './page-contact-us.component';
import { SharedModule } from '../shared/shared.module';
import { PageContactUsRoutingModule } from './page-contact-us-routing.module';

@NgModule({
  declarations: [
    PageContactUsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageContactUsRoutingModule
  ]
})
export class PageContactUsModule { }
