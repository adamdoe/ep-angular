import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';

import { SlickCarouselModule } from 'ngx-slick-carousel';

// TODO: Capability Components.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageHomeModule } from './components/page-home/page-home.module';
import { PageVideosModule } from './components/page-videos/page-videos.module';

import { PagePrivacyPolicyComponent } from './components/page-privacy-policy/page-privacy-policy.component';
import { PageTermsComponent } from './components/page-terms/page-terms.component';
import { PageNewsModule } from './components/page-news/page-news.module';
import { PageErrorModule } from './components/page-error/page-error.module';
import { PageContactUsModule } from './components/page-contact-us/page-contact-us.module';
import { AboutModule } from './components/about/about.module';
import { PageOurTeamComponent } from './components/page-our-team/page-our-team.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { PostTitleComponent } from './components/single-post/post-title/post-title.component';
import { BylineComponent } from './components/single-post/byline/byline.component';
import { CapabilitiesComponent } from './components/capabilities/capabilities.component';
import { SplitSectionComponent } from './components/capabilities/split-section/split-section.component';
import { TeamSectionComponent } from './components/capabilities/team-section/team-section.component';
import { TombstoneSectionComponent } from './components/capabilities/tombstone-section/tombstone-section.component';
import { TitleSectionComponent } from './components/capabilities/title-section/title-section.component';
import { TitleComponent } from './components/page-our-team/title/title.component';
import { FilterComponent } from './components/page-our-team/filter/filter.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { EmployeeItemComponent } from './components/page-our-team/employee-item/employee-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PagePrivacyPolicyComponent,
    PageTermsComponent,
    PageOurTeamComponent,
    SinglePostComponent,
    PostTitleComponent,
    BylineComponent,
    CapabilitiesComponent,
    SplitSectionComponent,
    TeamSectionComponent,
    TombstoneSectionComponent,
    TitleSectionComponent,
    TitleComponent,
    FilterComponent,
    EmployeeItemComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    PageErrorModule,
    PageContactUsModule,
    PageNewsModule,
    PageHomeModule,
    PageVideosModule,
    AboutModule,
    AppRoutingModule,
    SlickCarouselModule

  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
