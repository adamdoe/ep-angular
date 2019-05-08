import { Component, OnInit } from '@angular/core';
import {ExperienceService} from '../../../services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent implements OnInit {

  experienceCards;
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "nextArrow":"<div class='nav-btn next-slide'></div>",
    "prevArrow":"<div class='nav-btn prev-slide'></div>",
    "dots":true,
    "infinite": false,
    "arrows":true
  };
  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experienceCards = this.experienceService.getExperienceItems();
  }

}
