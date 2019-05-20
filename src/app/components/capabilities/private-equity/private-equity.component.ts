import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-private-equity',
  templateUrl: './private-equity.component.html',
  styleUrls: ['./private-equity.component.less']
})
export class PrivateEquityComponent implements OnInit {
  data;
  constructor( private wordpressService: WordpressService) { }

  ngOnInit() {

    this.wordpressService.getPage(2324).subscribe(data  => {
      this.data = data;
      console.log('Post Data: ', this.data);
    });
  }

}
