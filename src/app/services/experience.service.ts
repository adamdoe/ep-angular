import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  // TODO: Talk to database here.
  experienceItems = [
    {
      topLine: 'Topline Here',
      highlightLine: '33B',
      bottomLine: 'something else'
    },
    {
      topLine: 'Topline Here',
      highlightLine: '33B',
      bottomLine: 'something else'
    }
  ];

  constructor() { }

  getExperienceItems() {
    return this.experienceItems;
  }
}
