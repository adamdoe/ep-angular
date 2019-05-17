import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CapabilitiesRoutingModule } from './capabilities-routing.module';
import { EmergingManagersComponent } from './emerging-managers/emerging-managers.component';
import { GpadComponent } from './gpad/gpad.component';
import { HedgeFundsComponent } from './hedge-funds/hedge-funds.component';
import { PrivateCreditComponent } from './private-credit/private-credit.component';
import { PrivateEquityComponent } from './private-equity/private-equity.component';
import { RealAssetsComponent } from './real-assets/real-assets.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { SplitSectionComponent } from './split-section/split-section.component';
import { TitleSectionComponent } from './title-section/title-section.component';
import { TombstoneSectionComponent } from './tombstone-section/tombstone-section.component';
import { CapabilitiesComponent } from './capabilities.component';
import { TeamSectionComponent } from './team-section/team-section.component';

@NgModule({
  declarations: [
    EmergingManagersComponent,
    GpadComponent,
    HedgeFundsComponent,
    PrivateCreditComponent,
    PrivateEquityComponent,
    RealAssetsComponent,
    RealEstateComponent,
    SplitSectionComponent,
    TitleSectionComponent,
    TombstoneSectionComponent,
    CapabilitiesComponent,
    TeamSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CapabilitiesRoutingModule
  ]
})
export class CapabilitiesModule { }
