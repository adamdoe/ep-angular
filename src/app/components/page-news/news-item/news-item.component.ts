import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.less']
})
export class NewsItemComponent implements OnInit {
  @Input() post;
  constructor() { }

  ngOnInit() {
  }

}
