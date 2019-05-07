import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageContactUsComponent } from './components/page-contact-us/page-contact-us.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { PagePrivacyPolicyComponent } from './components/page-privacy-policy/page-privacy-policy.component';
import { PageTermsComponent } from './components/page-terms/page-terms.component';
import { PageVideosComponent } from './components/page-videos/page-videos.component';
import { PageNewsComponent } from './components/page-news/page-news.component';
import { PageOurTeamComponent } from './components/page-our-team/page-our-team.component';
import { PageWhoWeAreComponent } from './components/about/page-who-we-are/page-who-we-are.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { CapabilitiesComponent } from './components/capabilities/capabilities.component';

const routes: Routes = [
  { 
    path: '', 
    component: PageHomeComponent, 
    data: { title: 'Home | Eaton Partners'} 
  },
  { 
    path: 'contact', 
    component: PageContactUsComponent, 
    data: { title: 'Contact Us | Eaton Partners'} 
  },
  { 
    path: 'insights/news', 
    data: { title: 'News & Insights | Eaton Partners'},
    children: [
      {
        path: '',
        component: PageNewsComponent
      },
      { 
        path: ':id',
        component: SinglePostComponent
      }
    ] 
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
    data: { title: 'Terms & Conditions | Eaton Partners'} 
 
  },
  { 
    path: 'capabilities', 
    data: { title: 'Capabilities | Eaton Partners'},
    children: [
      {
        path: ':slug',
        component: CapabilitiesComponent
      },
    ] 
  },  
  // { 
  //   path: '**', 
  //   component: PageErrorComponent, 
  //   data: { title: '404 | Eaton Partners'} 
  // },
];

//{ enableTracing: true } -> Use this to show routes below.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
