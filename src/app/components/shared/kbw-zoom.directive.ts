import { Directive, ElementRef, HostListener, Renderer, Renderer2 } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[kbwZoom]'
})
export class KbwZoomDirective {

  constructor( private el: ElementRef, private renderer: Renderer2) {
    el.nativeElement.style.scale = '10';
  }

  @HostListener('mouseenter') mouseover($event) {
    this.renderer.setStyle(this.el.nativeElement, 'scale', 2);
  }

  @HostListener('mouseleave') mouseleave($event) {
    this.renderer.setStyle(this.el.nativeElement, 'scale', 1);
  }

}