import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-awards',
  templateUrl: './footer-awards.component.html',
  styleUrls: ['./footer-awards.component.less']
})
export class FooterAwardsComponent implements OnInit {

  awards = [ 
    {
      imagePath: 'https://eaton-partners.com/wp-content/themes/eaton_new/assets/img/awards/PlacementAgentAsia2018.png'
    },
    {
      imagePath: 'https://eaton-partners.com/wp-content/themes/eaton_new/assets/img/awards/PlacementAgentAsia2018.png'
    },
    {
      imagePath: 'https://eaton-partners.com/wp-content/themes/eaton_new/assets/img/awards/PlacementAgentAsia2018.png'
    },
    {
      imagePath: 'https://eaton-partners.com/wp-content/themes/eaton_new/assets/img/awards/PlacementAgentAsia2018.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
