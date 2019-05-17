import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CapabilitiesComponent } from './capabilities.component';
import { PrivateEquityComponent } from './private-equity/private-equity.component';
import { PrivateCreditComponent } from './private-credit/private-credit.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { RealAssetsComponent } from './real-assets/real-assets.component';
import { GpadComponent } from './gpad/gpad.component';
import { EmergingManagersComponent } from './emerging-managers/emerging-managers.component';

const routes: Routes = [
  
  { 
    path: 'capabilities', 
    component: CapabilitiesComponent,
    data: { title: 'Capabilities | Eaton Partners'}, 
    children: [
      { 
        path: 'private-equity', 
        component: PrivateEquityComponent,
        data: { title: 'Private Equity | Eaton Partners'} 
      },
      { 
        path: 'private-credit', 
        component: PrivateCreditComponent,
        data: { title: 'Private Credit | Eaton Partners'} 
      
      },
      { 
        path: 'real-estate', 
        component: RealEstateComponent,
        data: { title: 'Real Estate | Eaton Partners'} 
      },
      {
        path: 'real-assets',
        component: RealAssetsComponent,
        data: { title: 'Real Assets | Eaton Partners'}
      },
      {
        path: 'secondary-advisory-directs',
        component: GpadComponent,
        data: { title: 'General Partner Advisory & Directs | Eaton Partners'}
      },
      {
        path: 'emerging-managers',
        component: EmergingManagersComponent,
        data: { title: 'Emerging Managers | Eaton Partners'}
      },
    ]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CapabilitiesRoutingModule { }
