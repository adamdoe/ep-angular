import { Component, OnInit } from '@angular/core';
import { TestimonialService } from 'src/app/services/testimonial.service';

@Component({
  selector: 'app-testimonial-slider',
  templateUrl: './testimonial-slider.component.html',
  styleUrls: ['./testimonial-slider.component.less']
})
export class TestimonialSliderComponent implements OnInit {

  testimonials;

  constructor( private testimonialService: TestimonialService) { }

  ngOnInit() {

    this.testimonials = this.testimonialService.getTestimonials();
    console.log('Testimonials', this.testimonials);
  }

}
