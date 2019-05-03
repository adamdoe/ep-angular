import { Injectable } from '@angular/core';
import { TeamService } from './team.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  // TODO: Talk to database here.

  numOfTeamMembers = this.teamService.getNumberOfEmployees();
  experienceItems = [
    {
      topLine: 'TEAM WORK',
      highlightLine: this.numOfTeamMembers + '+',
      bottomLine: 'PROFESSIONALS',
      paragraphLine: 'In 9 offices on 3 continents. We have global market expertise with local know-how and connections',
      ctaLine: 'Meet The Team'
    },
    {
      topLine: 'Results Matter',
      highlightLine: '$50bn',
      bottomLine: 'Raised',
      paragraphLine: 'In the last 10 years alone, over 930 commitments across over 40 funds. This is an unrivaled industry track record.',
      ctaLine: 'Read Announcements'
    },
    {
      topLine: 'Our Performance',
      highlightLine: '77%',
      bottomLine: 'Oversubscribed',
      paragraphLine: 'Over the past year, 10 of 13 fund raises exceed o hit their hard cap. Our expertise and proven execution ensure that our clients are satisfied no matter their industry.',

      ctaLine: 'Share Your Ambition'

    },

  ];

  constructor( private teamService: TeamService ) { }

  getExperienceItems() {
    return this.experienceItems;
  }
}
