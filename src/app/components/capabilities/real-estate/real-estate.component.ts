import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.less']
})
export class RealEstateComponent implements OnInit {
  data;
  constructor(private wordpressService: WordpressService) { }

  ngOnInit() {
    this.wordpressService.getPage(2330).subscribe(data  => {
      this.data = data;
      console.log('Post Data: ', this.data);
    });
  }

}
