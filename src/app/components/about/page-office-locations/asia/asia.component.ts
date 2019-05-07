import { Component, OnInit } from '@angular/core';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-asia',
  templateUrl: './asia.component.html',
  styleUrls: ['./asia.component.less']
})
export class AsiaComponent implements OnInit {
  offices;
  constructor( private officeService: OfficeService) { }

  ngOnInit() {
    this.offices = this.officeService.offices;
  }

}
