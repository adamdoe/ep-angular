import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-real-assets',
  templateUrl: './real-assets.component.html',
  styleUrls: ['./real-assets.component.less']
})
export class RealAssetsComponent implements OnInit {
  data;
  constructor(private wordpressService: WordpressService) { }

  ngOnInit() {
    this.wordpressService.getPage(2326).subscribe(data  => {
      this.data = data;
      console.log('Post Data: ', this.data);
    });
  }

}
