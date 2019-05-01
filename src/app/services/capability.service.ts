import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class CapabilityService {


  constructor() { }

  // TODO: Talk to database here.
  capabilities = [
      {
        name: 'Private Equity'
      },
      {
        name: 'Private Credit'
      },
      {
        name: 'Hedge Funds'
      },
      {
        name: 'Real Assets'
      },
      {
        name: 'Real Estate'
      },
    {
      name: "General Partner Advisory & Directs"
    }
  ];

  getCapabilities() {
    return this.capabilities;
  }

}
