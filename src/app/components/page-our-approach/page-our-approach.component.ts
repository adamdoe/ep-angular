import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-our-approach',
  templateUrl: './page-our-approach.component.html',
  styleUrls: ['./page-our-approach.component.less']
})
export class PageOurApproachComponent implements OnInit {

  constructor(
    private titleService: Title,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.activatedRoute.snapshot.data.title);
  }

}
