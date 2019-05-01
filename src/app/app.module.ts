import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './components/shared/shared.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/page-home/jumbotron/jumbotron.component';
import { TestimonialSliderComponent } from './components/page-home/testimonial-slider/testimonial-slider.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { CapabilitiesComponent } from './components/page-home/capabilities/capabilities.component';
import { GlobalOfficesComponent } from './components/page-home/global-offices/global-offices.component';
import { PreFooterComponent } from './components/shared/pre-footer/pre-footer.component';
import { FooterComponent } from './components/footer/footer.component';
import { BackToTopComponent } from './components/shared/back-to-top/back-to-top.component';
import { SplitSectionComponent } from './components/capabilities/split-section/split-section.component';
import { TeamSectionComponent } from './components/capabilities/team-section/team-section.component';
import { TombstoneSectionComponent } from './components/capabilities/tombstone-section/tombstone-section.component';
import { FilterComponent } from './components/shared/filter/filter.component';
import { ButtonsComponent } from './components/shared/buttons/buttons.component';
import { NewsItemsWrapperComponent } from './components/page-news/news-items-wrapper/news-items-wrapper.component';
import { NewsItemComponent } from './components/page-news/news-item/news-item.component';
import { PageVideosComponent } from './components/page-videos/page-videos.component';
import { PageContactUsComponent } from './components/page-contact-us/page-contact-us.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CapabilityItemComponent } from './components/page-home/capabilities/capability-item/capability-item.component';
import { ExperienceComponent } from './components/page-home/experience/experience.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExperienceItemComponent } from './components/page-home/experience/experience-item/experience-item.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { FooterAwardsComponent } from './components/footer/footer-awards/footer-awards.component';
import { FooterCopyrightLineComponent } from './components/footer/footer-copyright-line/footer-copyright-line.component';
import { FooterSocialIconsComponent } from './components/footer/footer-social-icons/footer-social-icons.component';
import { SectionTitleComponent } from './components/shared/section-title/section-title.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    NavbarComponent,
    JumbotronComponent,
    TestimonialSliderComponent,
    PageHomeComponent,
    CapabilitiesComponent,
    GlobalOfficesComponent,
    PreFooterComponent,
    FooterComponent,
    BackToTopComponent,
    SplitSectionComponent,
    TeamSectionComponent,
    TombstoneSectionComponent,
    FilterComponent,
    ButtonsComponent,
    NewsItemsWrapperComponent,
    NewsItemComponent,
    PageVideosComponent,
    PageContactUsComponent,
    CapabilityItemComponent,
    ExperienceComponent,
    ExperienceItemComponent,
    ButtonComponent,
    FooterAwardsComponent,
    FooterCopyrightLineComponent,
    FooterSocialIconsComponent,
    SectionTitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
