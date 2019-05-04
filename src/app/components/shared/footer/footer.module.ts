import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FooterSocialIconsComponent } from './footer-social-icons/footer-social-icons.component';
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { FooterCopyrightLineComponent } from './footer-copyright-line/footer-copyright-line.component';
import { FooterAwardsComponent } from './footer-awards/footer-awards.component';

@NgModule({
  declarations: [
    FooterComponent,
    FooterSocialIconsComponent,
    FooterMenuComponent,
    FooterCopyrightLineComponent,
    FooterAwardsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent,
    FooterSocialIconsComponent,
    FooterMenuComponent,
    FooterCopyrightLineComponent,
    FooterAwardsComponent
  ]
})
export class FooterModule { }
