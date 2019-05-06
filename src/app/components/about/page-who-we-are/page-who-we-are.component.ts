import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-who-we-are',
  templateUrl: './page-who-we-are.component.html',
  styleUrls: ['./page-who-we-are.component.less']
})
export class PageWhoWeAreComponent implements OnInit {

  constructor(
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private router: Router 
  ) { }

  ngOnInit() {
    console.log(this.router.config);
    this.titleService.setTitle(this.activatedRoute.snapshot.data.title);
  }

}
