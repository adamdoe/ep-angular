import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-who-we-are',
  templateUrl: './page-who-we-are.component.html',
  styleUrls: ['./page-who-we-are.component.less']
})
export class PageWhoWeAreComponent implements OnInit {

  constructor(
    private titleService: Title,
    private activatedRoute: ActivatedRoute 
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.activatedRoute.snapshot.data.title);
  }

}
