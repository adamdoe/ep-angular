import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-terms',
  templateUrl: './page-terms.component.html',
  styleUrls: ['./page-terms.component.less']
})
export class PageTermsComponent implements OnInit {

  constructor(
    private titleService: Title,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.activatedRoute.snapshot.data.title);
  }

}
