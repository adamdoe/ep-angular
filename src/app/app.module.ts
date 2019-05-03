import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './components/shared/shared.component';
import { SplitSectionComponent } from './components/capabilities/split-section/split-section.component';
import { TeamSectionComponent } from './components/capabilities/team-section/team-section.component';
import { TombstoneSectionComponent } from './components/capabilities/tombstone-section/tombstone-section.component';
import { PageVideosComponent } from './components/page-videos/page-videos.component';
import { PageContactUsComponent } from './components/page-contact-us/page-contact-us.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageHomeModule } from './components/page-home/page-home.module';
import { SharedModule } from './components/shared/shared.module';
import { PageWhoWeAreComponent } from './components/page-who-we-are/page-who-we-are.component';
import { PageWhyChooseUsComponent } from './components/page-why-choose-us/page-why-choose-us.component';
import { PageOurApproachComponent } from './components/page-our-approach/page-our-approach.component';
import { GlobalReachComponent } from './components/page-why-choose-us/global-reach/global-reach.component';
import { ExperienceComponent } from './components/page-why-choose-us/experience/experience.component';
import { PageTemplateComponent } from './components/page-template/page-template.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { PagePrivacyPolicyComponent } from './components/page-privacy-policy/page-privacy-policy.component';
import { PageTermsComponent } from './components/page-terms/page-terms.component';
import { VideoItemComponent } from './components/page-videos/video-item/video-item.component';
import { PageNewsComponent } from './components/page-news/page-news.component';
import { NewsItemComponent } from './components/page-news/news-item/news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    SplitSectionComponent,
    TeamSectionComponent,
    TombstoneSectionComponent,
    PageVideosComponent,
    PageContactUsComponent,
    PageWhoWeAreComponent,
    PageWhyChooseUsComponent,
    PageOurApproachComponent,
    GlobalReachComponent,
    ExperienceComponent,
    PageTemplateComponent,
    PageErrorComponent,
    PagePrivacyPolicyComponent,
    PageTermsComponent,
    VideoItemComponent,
    PageNewsComponent,
    NewsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PageHomeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
