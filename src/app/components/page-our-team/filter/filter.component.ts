import { Component, OnInit } from '@angular/core';
import { CapabilityService } from 'src/app/services/capability.service';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'app-our-team-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less'],
  providers: [CapabilityService]
})
export class FilterComponent implements OnInit {
  capabilities;
  offices;

  constructor( 
    private capabilityService: CapabilityService,
    private officeService: OfficeService 
    
    ) { }

  ngOnInit() {
    this.capabilities = this.capabilityService.getCapabilities();
    this.offices = this.officeService.offices;
    console.log('Capabilities', this.capabilities);
    console.log('Offices', this.offices);
  }

}
