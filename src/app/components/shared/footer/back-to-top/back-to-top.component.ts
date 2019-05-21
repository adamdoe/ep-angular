import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.less']
})
export class BackToTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event']) 
  scroll(event) {
    // console.debug("Scroll Event", document.body.scrollTop);
    // see András Szepesházi's comment below
    console.debug("Scroll Event", window.pageYOffset );
  }

}
