import { Component, OnInit } from '@angular/core';
import {ExperienceService} from '../../../services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.less']
})
export class ExperienceComponent implements OnInit {

  experienceCards;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.experienceCards = this.experienceService.getExperienceItems();
  }

}
