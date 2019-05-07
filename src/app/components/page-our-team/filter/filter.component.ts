import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-our-team-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   // $('select').selectBoxIt();
    //console.log($('.mainContainer'));
  }

}
