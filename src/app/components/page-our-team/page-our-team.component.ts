import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-page-our-team',
  templateUrl: './page-our-team.component.html',
  styleUrls: ['./page-our-team.component.less']
})
export class PageOurTeamComponent implements OnInit {
  employees;
  counter;
  totalEmployees;
  offset;
  
  constructor( private teamService: TeamService ) { }

  ngOnInit() {
    this.employees = this.teamService.teamMembers;
    this.totalEmployees = this.teamService.getNumberOfEmployees();
    this.offset = 12;
    console.log('Total Employees: ', this.totalEmployees);
  }

  getMore() {
    console.log("Button Clicked");
    this.offset += this.offset;
  }

}
