import { Component, OnInit, Input } from '@angular/core';
import {ExperienceCard} from '../../../../models/experience-card.model';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.less']
})
export class ExperienceItemComponent implements OnInit {

  @Input() experienceCard: ExperienceCard;
  constructor() { }

  ngOnInit() {
  }

}
