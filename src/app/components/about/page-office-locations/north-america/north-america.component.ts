import { Component, OnInit } from '@angular/core';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-north-america',
  templateUrl: './north-america.component.html',
  styleUrls: ['./north-america.component.less']
})
export class NorthAmericaComponent implements OnInit {
  offices;
  
  constructor(private officeService: OfficeService) { }

  ngOnInit() {
    this.offices = this.officeService.offices;
  }

}
