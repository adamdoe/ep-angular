import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import { WordpressService } from 'src/app/services/wordpress.service';

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
  
  constructor( 
    private teamService: TeamService,
    private wordpressService: WordpressService 
    
    ) { }

  ngOnInit() {
    // this.employees = this.teamService.teamMembers;
    // this.totalEmployees = this.teamService.getNumberOfEmployees();

    this.wordpressService.getEmployees().subscribe(employees  => {
      this.employees = employees;
      console.log('Employees', this.employees);
    });

    this.offset = this.wordpressService.teamPageLimit;
    
  }

  getMore() {
    console.log("Button Clicked");
    this.offset += this.offset;
  }

}
