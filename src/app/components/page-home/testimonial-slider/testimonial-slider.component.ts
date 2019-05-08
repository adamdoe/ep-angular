import { Component, OnInit } from '@angular/core';
import { TestimonialService } from 'src/app/services/testimonial.service';

@Component({
  selector: 'app-testimonial-slider',
  templateUrl: './testimonial-slider.component.html',
  styleUrls: ['./testimonial-slider.component.less']
})
export class TestimonialSliderComponent implements OnInit {

  testimonials;
  
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "nextArrow":"<div class='nav-btn next-slide'></div>",
    "prevArrow":"<div class='nav-btn prev-slide'></div>",
    "dots":true,
    "infinite": false,
    "arrows":true
  };
  
  addSlide() {
    //this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.testimonials.length = this.testimonials.length - 1;
  }
  
  slickInit(e) {
    console.log('Testimonial Slider Initialized.');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }

  constructor( 
    private testimonialService: TestimonialService
  ) { }

  ngOnInit() {

    this.testimonials = this.testimonialService.getTestimonials();
    console.log('Testimonials', this.testimonials);
  }

}
