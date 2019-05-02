import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './components/shared/shared.component';
import { SplitSectionComponent } from './components/capabilities/split-section/split-section.component';
import { TeamSectionComponent } from './components/capabilities/team-section/team-section.component';
import { TombstoneSectionComponent } from './components/capabilities/tombstone-section/tombstone-section.component';
import { NewsItemsWrapperComponent } from './components/page-news/news-items-wrapper/news-items-wrapper.component';
import { NewsItemComponent } from './components/page-news/news-item/news-item.component';
import { PageVideosComponent } from './components/page-videos/page-videos.component';
import { PageContactUsComponent } from './components/page-contact-us/page-contact-us.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    SplitSectionComponent,
    TeamSectionComponent,
    TombstoneSectionComponent,
    NewsItemsWrapperComponent,
    NewsItemComponent,
    PageVideosComponent,
    PageContactUsComponent,
    PageWhoWeAreComponent,
    PageWhyChooseUsComponent,
    PageOurApproachComponent,
    GlobalReachComponent,
    ExperienceComponent,
    PageTemplateComponent,
    PageErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    PageHomeModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
