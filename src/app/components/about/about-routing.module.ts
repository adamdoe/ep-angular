import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageWhoWeAreComponent } from './page-who-we-are/page-who-we-are.component';
import { PageWhyChooseUsComponent } from './page-why-choose-us/page-why-choose-us.component';
import { PageOurApproachComponent } from './page-our-approach/page-our-approach.component';
import { AboutComponent } from './about.component';
import { PageOfficeLocationsComponent } from './page-office-locations/page-office-locations.component';
import { PageOurTeamComponent } from './page-our-team/page-our-team.component';

const routes: Routes = [
  
  { 
    path: 'about', 
    component: AboutComponent,
    data: { title: 'Who We Are | Eaton Partners'}, 
    children: [
      { 
        path: 'who-we-are', 
        component: PageWhoWeAreComponent,
        data: { title: 'Who We Are | Eaton Partners'} 
      },
      { 
        path: 'why-choose-us', 
        component: PageWhyChooseUsComponent,
        data: { title: 'Why Choose Us | Eaton Partners'} 
      
      },
      { 
        path: 'our-approach', 
        component: PageOurApproachComponent,
        data: { title: 'Our Approach | Eaton Partners'} 
      },
      {
        path: 'our-team',
        component: PageOurTeamComponent,
        data: { title: 'Our Team | Eaton Partners'}
      },
      {
        path: 'office-locations',
        component: PageOfficeLocationsComponent,
        data: { title: 'Office Locations | Eaton Partners'}
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
export class AboutRoutingModule { }
