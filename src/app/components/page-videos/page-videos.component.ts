import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-videos',
  templateUrl: './page-videos.component.html',
  styleUrls: ['./page-videos.component.less']
})
export class PageVideosComponent implements OnInit {
  videos;
  constructor( 
    private videoService: VideoService,
    private titleService: Title,
    private activatedRoute: ActivatedRoute 
    ) { }

  ngOnInit() {
    this.videos = this.videoService.videos;
    this.titleService.setTitle(this.activatedRoute.snapshot.data.title);
  }

}
