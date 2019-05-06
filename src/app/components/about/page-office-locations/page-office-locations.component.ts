import { Component, OnInit } from '@angular/core';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-page-office-locations',
  templateUrl: './page-office-locations.component.html',
  styleUrls: ['./page-office-locations.component.less']
})
export class PageOfficeLocationsComponent implements OnInit {

  offices;
  constructor( private officeService: OfficeService) { }

  ngOnInit() {
    this.offices = this.officeService.offices;
    console.log('Offices', this.offices);
  }

}
