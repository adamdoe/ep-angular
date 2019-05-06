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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FooterMenuComponent } from './footer/footer-menu/footer-menu.component';
import { PageTemplateComponent } from './page-template/page-template.component';

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
    FooterMenuComponent,
    PageTemplateComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    AppRoutingModule
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
    PageTitleComponent,
    PageTemplateComponent
  ]
})
export class SharedModule { }
