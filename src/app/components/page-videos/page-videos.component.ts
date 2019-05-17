import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from 'src/app/services/wordpress.service';

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
    private activatedRoute: ActivatedRoute,
    private wordpressService: WordpressService 
    ) { }

  ngOnInit() {
    //this.videos = this.videoService.videos;
    this.wordpressService.getVideos().subscribe(videos  => {
      this.videos = videos;
      console.log('Videos', this.videos);
    });
    this.titleService.setTitle(this.activatedRoute.snapshot.data.title);
  }

}
