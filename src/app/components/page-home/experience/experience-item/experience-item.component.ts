import { Component, OnInit, Input } from '@angular/core';
import {ExperienceCard} from '../../../../models/experience-card.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.less']
})
export class ExperienceItemComponent implements OnInit {
  
  // TODO: Would be cool to reach out to Salesforce API for $ Results.
  numberOfEmployees;

  @Input() experienceCard: ExperienceCard;
  constructor( private teamService: TeamService ) { }

  ngOnInit() {
    this.numberOfEmployees = this.teamService.getNumberOfEmployees();
    console.log('#', this.numberOfEmployees);
  }

}
