import { Component, OnInit, Input } from '@angular/core';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.less']
})
export class TeamMemberComponent implements OnInit {
  @Input() employeeId;
  employee;
  image; 

  constructor( private wordpressService: WordpressService ) { }

  ngOnInit() {
    console.log('Init');

    this.wordpressService.getEmployee(this.employeeId).subscribe(employee  => {
      this.employee = employee;
      console.log('Employee Data: ', this.employee);
    });

    this.wordpressService.getEmployeeImage(this.employee.featured_media).subscribe( image => {
      this.image = image;
      console.log('Employee Image', this.image);
    })
  }

  ngAfterContentInit() {
    this.wordpressService.getEmployeeImage(this.employee.featured_media).subscribe( image => {
      this.image = image;
      console.log('Employee Image', this.image);
    })
  }

}
