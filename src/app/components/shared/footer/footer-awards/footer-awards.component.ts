import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-awards',
  templateUrl: './footer-awards.component.html',
  styleUrls: ['./footer-awards.component.less']
})
export class FooterAwardsComponent implements OnInit {

  awards = [ 
    {
      id: 1,
      imagePath: '/assets/img/awards/PlacementAgentAsia2018.png'
    },
    {
      id: 2,
      imagePath: '/assets/img/awards/SecondariesAsia2018.png'
    },
    {
      id: 3,
      imagePath: '/assets/img/awards/PlacementAgentAsia2017.png'
    },
    {
      id: 4,
      imagePath: '/assets/img/awards/PlacementAgentNA2017.svg'
    },
    {
      id: 5,
      imagePath: '/assets/img/awards/PlacementAgentAsia2016.png'
    },
    {
      id: 6,
      imagePath: '/assets/img/awards/SecondariesAsia2016.png'
    },
    {
      id: 5,
      imagePath: '/assets/img/awards/PlacementAgentAsia2015.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
