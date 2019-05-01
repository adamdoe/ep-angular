import { Component, OnInit, Input } from '@angular/core';
import {Capability} from '../../../../models/capability.model';

@Component({
  selector: 'app-capability-item',
  templateUrl: './capability-item.component.html',
  styleUrls: ['./capability-item.component.less']
})
export class CapabilityItemComponent implements OnInit {
  @Input() capability:Capability;
  constructor() { }

  ngOnInit() {
  }

}
