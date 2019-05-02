import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from './section-title/section-title.component';
import { FilterComponent } from './filter/filter.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FooterAwardsComponent } from './footer/footer-awards/footer-awards.component';
import { FooterCopyrightLineComponent } from './footer/footer-copyright-line/footer-copyright-line.component';
import { FooterSocialIconsComponent } from './footer/footer-social-icons/footer-social-icons.component';
import { PreFooterComponent } from './footer/pre-footer/pre-footer.component';
import { ButtonComponent } from './button/button.component';
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  declarations: [
    SectionTitleComponent,
    FilterComponent,
    ButtonsComponent,
    ButtonComponent,
    BackToTopComponent,
    NavbarComponent,
    FooterComponent,
    FooterAwardsComponent,
    FooterCopyrightLineComponent,
    FooterSocialIconsComponent,
    PreFooterComponent,
    PageTitleComponent,
    PageTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SectionTitleComponent,
    FilterComponent,
    ButtonsComponent,
    ButtonComponent,
    BackToTopComponent,
    NavbarComponent,
    FooterComponent,
    FooterAwardsComponent,
    FooterCopyrightLineComponent,
    FooterSocialIconsComponent,
    PreFooterComponent,
    PageTitleComponent
  ]
})
export class SharedModule { }
