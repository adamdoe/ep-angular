import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  testimonials = [
    {
      id: 1,
      name: 'David Capobianco',
      title: 'CEO & Managing Partner',
      company: 'Five Point Energy',
      quote: 'Eaton Partners did a terrific job managing the process and introducing us to highly qualified institutional investors who had a direct appetite for our sector and strategy. The depth of their limited partner relationships and understanding of their investment strategies played a key role in the speed and efficiency of our successful fundraise.'
    }
  ];

  constructor() { }
  
  getTestimonials() {
    return this.testimonials;
  }
}
