import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageVideosComponent } from './page-videos.component';

const routes: Routes = [
  
  { 
    path: 'insights/videos', 
    data: { title: 'Videos | Eaton Partners'}, 
    children: [
      { 
        path: '', 
        component: PageVideosComponent,
        data: { title: 'Videos | Eaton Partners'} 
      },  
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class VideosRoutingModule { }
