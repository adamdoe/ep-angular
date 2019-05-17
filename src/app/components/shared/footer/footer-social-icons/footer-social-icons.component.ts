import { Component, OnInit } from '@angular/core';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-footer-social-icons',
  templateUrl: './footer-social-icons.component.html',
  styleUrls: ['./footer-social-icons.component.less']
})
export class FooterSocialIconsComponent implements OnInit {

  linkedinLink;
  twitterLink;

  constructor( private socialService: SocialService ) { }

  ngOnInit() {
    this.linkedinLink = this.socialService.links.linkedin;
    this.twitterLink = this.socialService.links.twitter;
  }

}
