import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// TODO: Capability Components.
import { SplitSectionComponent } from './components/capabilities/split-section/split-section.component';
import { TeamSectionComponent } from './components/capabilities/team-section/team-section.component';
import { TombstoneSectionComponent } from './components/capabilities/tombstone-section/tombstone-section.component';


import { PageVideosComponent } from './components/page-videos/page-videos.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageHomeModule } from './components/page-home/page-home.module';
import { SharedModule } from './components/shared/shared.module';
import { PageWhoWeAreComponent } from './components/page-who-we-are/page-who-we-are.component';
import { PageWhyChooseUsComponent } from './components/page-why-choose-us/page-why-choose-us.component';
import { PageOurApproachComponent } from './components/page-our-approach/page-our-approach.component';
import { GlobalReachComponent } from './components/page-why-choose-us/global-reach/global-reach.component';
import { ExperienceComponent } from './components/page-why-choose-us/experience/experience.component';
import { PageTemplateComponent } from './components/page-template/page-template.component';
import { PagePrivacyPolicyComponent } from './components/page-privacy-policy/page-privacy-policy.component';
import { PageTermsComponent } from './components/page-terms/page-terms.component';
import { VideoItemComponent } from './components/page-videos/video-item/video-item.component';
import { PageNewsModule } from './components/page-news/page-news.module';
import { PageErrorModule } from './components/page-error/page-error.module';
import { PageContactUsModule } from './components/page-contact-us/page-contact-us.module';

@NgModule({
  declarations: [
    AppComponent,
    SplitSectionComponent,
    TeamSectionComponent,
    TombstoneSectionComponent,
    PageVideosComponent,
    PageWhoWeAreComponent,
    PageWhyChooseUsComponent,
    PageOurApproachComponent,
    GlobalReachComponent,
    ExperienceComponent,
    PageTemplateComponent,
    PagePrivacyPolicyComponent,
    PageTermsComponent,
    VideoItemComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    SharedModule,
    PageHomeModule,
    PageErrorModule,
    PageContactUsModule,
    PageNewsModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
