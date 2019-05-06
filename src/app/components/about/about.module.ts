import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageWhoWeAreComponent } from './page-who-we-are/page-who-we-are.component';
import { PageWhyChooseUsComponent } from './page-why-choose-us/page-why-choose-us.component';
import { PageOurApproachComponent } from './page-our-approach/page-our-approach.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { ExperienceComponent } from './page-why-choose-us/experience/experience.component';
import { GlobalReachComponent } from './page-why-choose-us/global-reach/global-reach.component';
import { PageOfficeLocationsComponent } from './page-office-locations/page-office-locations.component';


@NgModule({
  declarations: [
    PageWhoWeAreComponent,
    PageWhyChooseUsComponent,
    PageOurApproachComponent,
    ExperienceComponent,
    GlobalReachComponent,
    AboutComponent,
    PageOfficeLocationsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AboutRoutingModule,
  ]
})
export class AboutModule { }
