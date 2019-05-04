import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageContactUsComponent } from './components/page-contact-us/page-contact-us.component';
import { PageWhoWeAreComponent } from './components/page-who-we-are/page-who-we-are.component';
import { PageWhyChooseUsComponent } from './components/page-why-choose-us/page-why-choose-us.component';
import { PageOurApproachComponent } from './components/page-our-approach/page-our-approach.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { PagePrivacyPolicyComponent } from './components/page-privacy-policy/page-privacy-policy.component';
import { PageTermsComponent } from './components/page-terms/page-terms.component';
import { PageVideosComponent } from './components/page-videos/page-videos.component';
import { PageNewsComponent } from './components/page-news/page-news.component';

const routes: Routes = [
  { 
    path: '', 
    component: PageHomeComponent, 
    pathMatch: 'full', 
    data: { title: 'Home | Eaton Partners'} 
  },
  { 
    path: 'about/who-we-are', 
    component: PageWhoWeAreComponent,
    data: { title: 'Who We Are | Eaton Partners'} 
 
  },
  { 
    path: 'about/why-choose-us', 
    component: PageWhyChooseUsComponent,
    data: { title: 'Why Choose Us | Eaton Partners'} 
 
  },
  { 
    path: 'about/our-approach', 
    component: PageOurApproachComponent,
    data: { title: 'Our Approach | Eaton Partners'} 
  },
  { 
    path: 'insights/news', 
    component: PageNewsComponent,
    data: { title: 'News & Insights | Eaton Partners'} 

  },  
  { 
    path: 'insights/videos', 
    component: PageVideosComponent,
    data: { title: 'Videos | Eaton Partners'} 
 
  },  
  { 
    path: 'privacy-policy', 
    component: PagePrivacyPolicyComponent,
    data: { title: 'Privacy Policy | Eaton Partners'} 
 
  },
  { 
    path: 'terms-and-conditions', 
    component: PageTermsComponent,
    data: { title: 'Terms & | Eaton Partners'} 
 
  },
  { 
    path: '**', 
    component: PageErrorComponent, 
    data: { title: '404 | Eaton Partners'} 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
