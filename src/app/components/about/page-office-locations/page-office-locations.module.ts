import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOfficeLocationsComponent } from './page-office-locations.component';
import { NorthAmericaComponent } from './north-america/north-america.component';
import { EuropeComponent } from './europe/europe.component';
import { AsiaComponent } from './asia/asia.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    PageOfficeLocationsComponent,
    NorthAmericaComponent,
    EuropeComponent,
    AsiaComponent,

  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PageOfficeLocationsModule { }
