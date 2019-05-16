import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { TeamService } from 'src/app/services/team.service';
import { WordpressService } from 'src/app/services/wordpress.service';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.less']
})
export class EmployeeItemComponent implements OnInit {
  @Input() employee;
  totalEmployees;
  offset = 12;
  offices = [];
  constructor( private teamService: TeamService,
    private wordpressService: WordpressService ) { }

  ngOnInit() {
    //this.totalEmployees = this.teamService.getNumberOfEmployees();
    //this.office = this.wordpressService.getEmployeeOfficeByOfficeId(this.employee.joblocations);

    // this.employee.joblocations.forEach(id => {
    //   this.wordpressService.getEmployeeOfficeByOfficeId(id).subscribe(office  => {
        
    //     this.offices.push(office.name);
        
    //   });
    // });
  }



}
