import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-private-credit',
  templateUrl: './private-credit.component.html',
  styleUrls: ['./private-credit.component.less']
})
export class PrivateCreditComponent implements OnInit {
  data;
  constructor( private wordpressService: WordpressService ) { }

  ngOnInit() {
    this.wordpressService.getPage(2334).subscribe(data  => {
      this.data = data;
      console.log('Post Data: ', this.data);
    });
  }

}
