import { Component, OnInit } from '@angular/core';
import {CapabilityService} from '../../../services/capability.service';
import {Capability} from '../../../models/capability.model';

@Component({
  selector: 'app-capabilities',
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.less'],
  providers: [CapabilityService]

})
export class CapabilitiesComponent implements OnInit {

  capabilities;

  constructor(private capabilityService: CapabilityService) { }

  ngOnInit() {
    this.capabilities = this.capabilityService.getCapabilities();
    console.log(this.capabilities);
  }

}
