import { Component, OnInit, Input } from '@angular/core';
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
  offices = [];
  
  data = {
    imagePath: './assets/img/avatar.png'
  }
  
  constructor( private teamService: TeamService,
    private wordpressService: WordpressService ) { }

  ngOnInit() {

  }



}
