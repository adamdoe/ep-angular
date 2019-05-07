import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageVideosComponent } from './page-videos.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { VideosRoutingModule } from './page-videos-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PageVideosComponent,
    VideoItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VideosRoutingModule
  ]
})
export class PageVideosModule { }
