import { Component, OnInit, Input } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-team-section',
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.less']
})
export class TeamSectionComponent implements OnInit {

  @Input() data;
  employees;

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "nextArrow":'<i class="fas fa-chevron-right"></i>',
    "prevArrow":'<i class="fas fa-chevron-left"></i>',
    "dots":false,
    "infinite": false,
    "arrows":true,
    "responsive": [ 
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 2, slidesToScroll: 1, }
      }, 
      {
        breakpoint: 768,
        settings: { slidesToShow: 4, slidesToScroll: 1, }
      },
]
  };

  constructor( private wordpressService: WordpressService) { }

  ngOnInit() {
    this.employees = this.data.custom_fields.team_members_list_rlt;
  }

  getEmployeeData(id) {
    this.wordpressService.getEmployee(id).subscribe(data  => {
      this.data = data;
      console.log('Employee Data: ', this.data);
    });
  }

}
