import { Component, OnInit } from '@angular/core';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-europe',
  templateUrl: './europe.component.html',
  styleUrls: ['./europe.component.less']
})
export class EuropeComponent implements OnInit {
  offices;
  constructor( private officeSerivice: OfficeService) { }

  ngOnInit() {
    this.offices = this.officeSerivice.offices;
  }

}
