import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.less']
})
export class JumbotronComponent implements OnInit {

  jumbotronData = {
    title: 'IDENTIFYING INVESTMENT OPPORTUNITIES THAT DRIVE INNOVATION AND UNITING THEM WITH SOPHISTICATED LONG-TERM CAPITAL PARTNERS.',
    imagePath: 'https://dev2.eaton-partners.com/assets/img/background.png'
  }
  constructor() { }

  ngOnInit() {
  }

}
