import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-hedge-funds',
  templateUrl: './hedge-funds.component.html',
  styleUrls: ['./hedge-funds.component.less']
})
export class HedgeFundsComponent implements OnInit {
  data;
  constructor(  private wordpressService: WordpressService ) { }

  ngOnInit() {
    this.wordpressService.getPage(2328).subscribe(data  => {
      this.data = data;
      console.log('Post Data: ', this.data);
    });
  }

}
