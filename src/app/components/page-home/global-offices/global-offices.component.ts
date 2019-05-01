import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-offices',
  templateUrl: './global-offices.component.html',
  styleUrls: ['./global-offices.component.less']
})
export class GlobalOfficesComponent implements OnInit {

  globalOfficeData = {
    paragraph: 'Eaton Partners provides global expertise with professionals working from our offices located in Rowayton, CT., New York, NY., Chicago IL., Houston TX., San Diego CA., San Francisco CA., London, UK., Hong Kong, and Shanghai.',
    imagePath: './assets/img/eaton_map.png'
  }
  constructor() { }

  ngOnInit() {
  }


}
