import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageWhyChooseUsComponent } from './page-why-choose-us.component';
import { GlobalReachComponent } from './global-reach/global-reach.component';
import { SharedModule } from '../../shared/shared.module';
import { ExperienceSectionComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    PageWhyChooseUsComponent,
    GlobalReachComponent,
    ExperienceSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PageWhyChooseUsModule { }
