import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { PageOfficeLocationsModule } from './page-office-locations/page-office-locations.module';
import { PageWhoWeAreModule } from './page-who-we-are/page-who-we-are.module';
import { PageWhyChooseUsModule } from './page-why-choose-us/page-why-choose-us.module';
import { PageOurApproachModule } from './page-our-approach/page-our-approach.module';
import { PageOurTeamModule } from './page-our-team/page-our-team.module';


@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PageOfficeLocationsModule,
    PageWhoWeAreModule,
    PageWhyChooseUsModule,
    PageOurApproachModule,
    PageOurTeamModule,
    AboutRoutingModule,
  ]
})
export class AboutModule { }
