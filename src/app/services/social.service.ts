import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  links = {
    twitter: 'https://twitter.com/eatonpartners',
    linkedin: 'https://www.linkedin.com/company/eaton-partners-llc/'
  }

  constructor() { }
}
