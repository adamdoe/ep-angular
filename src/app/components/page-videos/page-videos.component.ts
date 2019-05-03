import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-page-videos',
  templateUrl: './page-videos.component.html',
  styleUrls: ['./page-videos.component.less']
})
export class PageVideosComponent implements OnInit {
  videos;
  constructor( private videoService: VideoService ) { }

  ngOnInit() {
    this.videos = this.videoService.videos;
    console.log('Videos', this.videos);
  }

}
