import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-privacy-policy',
  templateUrl: './page-privacy-policy.component.html',
  styleUrls: ['./page-privacy-policy.component.less']
})
export class PagePrivacyPolicyComponent implements OnInit {

  constructor(
    private titleService: Title,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.activatedRoute.snapshot.data.title);
  }

}
