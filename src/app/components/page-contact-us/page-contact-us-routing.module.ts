import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageContactUsComponent } from './page-contact-us.component';

const routes: Routes = [
  { 
    path: 'contact', 
    component: PageContactUsComponent, 
    data: { title: 'Contact Us | Eaton Partners'} 
  },
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PageContactUsRoutingModule { }
