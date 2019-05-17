import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.less']
})
export class VideoItemComponent implements OnInit {


  // TODO: After video model is defined change <any>.
  @Input() video: Array<any>;
  video_link;

  constructor() { }

  ngOnInit() {
    //console.log(this.video);
    //this.video = this.video;
    //this.video_link = 'https://fast.wistia.com/embed/medias/'+ this.video.video_id +'.jsonp';
    //console.log('video id', this.video_link);
  }

}
