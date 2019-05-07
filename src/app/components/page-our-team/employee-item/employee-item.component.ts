import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.less']
})
export class EmployeeItemComponent implements OnInit {
  @Input() employee;
  totalEmployees;
  offset;
  constructor( private teamService: TeamService ) { }

  ngOnInit() {
    this.totalEmployees = this.teamService.getNumberOfEmployees();
    this.offset = 12;
  }


}
