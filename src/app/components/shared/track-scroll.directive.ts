import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[trackScroll]'
})

export class TrackScrollDirective implements OnInit{

    constructor( private el: ElementRef) {}

    ngOnInit() {
      console.debug("Scroll Event");

    }

}