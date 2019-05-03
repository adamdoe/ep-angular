import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.less']
})
export class VideoItemComponent implements OnInit {


  // TODO: After video model is defined change <any>.
  @Input() video: Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
