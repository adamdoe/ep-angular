import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home.component';
import { TestimonialSliderComponent } from './testimonial-slider/testimonial-slider.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { GlobalOfficesComponent } from './global-offices/global-offices.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceItemComponent } from './experience/experience-item/experience-item.component';
import { CapabilitiesComponent } from './capabilities/capabilities.component';
import { CapabilityItemComponent } from './capabilities/capability-item/capability-item.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PageHomeComponent,
    TestimonialSliderComponent,
    JumbotronComponent,
    GlobalOfficesComponent,
    ExperienceComponent,
    ExperienceItemComponent,
    CapabilitiesComponent,
    CapabilityItemComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
  ]
})
export class PageHomeModule { }
