import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-why-choose-us',
  templateUrl: './page-why-choose-us.component.html',
  styleUrls: ['./page-why-choose-us.component.less']
})
export class PageWhyChooseUsComponent implements OnInit {

  constructor(
    private titleService: Title,
    private activatedRoute: ActivatedRoute 
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.activatedRoute.snapshot.data.title);
  }

}
