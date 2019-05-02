import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageContactUsComponent } from './components/page-contact-us/page-contact-us.component';
import { PageWhoWeAreComponent } from './components/page-who-we-are/page-who-we-are.component';
import { PageWhyChooseUsComponent } from './components/page-why-choose-us/page-why-choose-us.component';
import { PageOurApproachComponent } from './components/page-our-approach/page-our-approach.component';
import { PageErrorComponent } from './components/page-error/page-error.component';

const routes: Routes = [
  { path: '', component: PageHomeComponent, pathMatch: 'full' },
  { path: 'contact', component: PageContactUsComponent },
  { path: 'about/who-we-are', component: PageWhoWeAreComponent },
  { path: 'about/why-choose-us', component: PageWhyChooseUsComponent },
  { path: 'about/our-approach', component: PageOurApproachComponent },
  { path: '**', component: PageErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
