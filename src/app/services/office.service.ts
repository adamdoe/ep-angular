import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {
  offices = [
    {
      id: 1,
      street: [
        '131 Rowayton Avenue',
      ],
      city: 'Rowayton',
      stateAbbr: 'CT',
      state: 'Connecticut',
      country: 'United States',
      continent: 'North America',
      zipcode: '06853',
      contact: 
        {
          phone: '+1 (203) 831 2970',
          email: '',
        }
      ,
      lat: '',
      long: ''
    },
    {
      id: 2,
      street: [
        '787 Seventh Avenue',
        '12th Floor',
      ],
      city: 'New York',
      stateAbbr: 'NY',
      state: 'New York',
      country: 'United States',
      continent: 'North America',
      zipcode: '10019',
      contact: 
        {
          phone: '+1 (917) 398 0940',
          email: '',
        }
      ,
      lat: '',
      long: ''
    },
    {
      id: 3,
      street: [
        '70 West Madison Street',
        '24th Floor'
      ],
      city: 'Chicago',
      stateAbbr: 'IL',
      state: 'Illinois',
      country: 'United States',
      continent: 'North America',
      zipcode: '60602',
      contact: 
        {
          phone: '+1 (312) 340 0609',
          email: '',
        }
      ,
      lat: '',
      long: ''
    },
    {
      id: 4,
      street: [
        '1000 Louisiana Street',
        'Suite 5250'
      ],
      city: 'Houston',
      stateAbbr: 'TX',
      state: 'Texas',
      country: 'United States',
      continent: 'North America',
      zipcode: '77002',
      contact: 
        {
          phone: '+1 (713) 589 3383',
          email: '',
        }
      ,
      lat: '',
      long: ''
    },
    {
      id: 5,
      street: [
        '4660 La Jolla Village Drive',
        'Suite 1040'
      ],
      city: 'San Diego',
      stateAbbr: 'CA',
      state: 'California',
      country: 'United States',
      continent: 'North America',
      zipcode: '',
      contact: 
        {
          phone: '+1 (203) 831 2970',
          email: '',
        }
      ,
      lat: '',
      long: ''
    },
    {
      id: 1,
      street: [
        '131 Rowayton Avenue',
      ],
      city: 'San Francisco',
      stateAbbr: 'CA',
      state: 'California',
      country: 'United States',
      continent: 'North America',
      zipcode: '94104',
      contact: 
        {
          phone: '+1 (415) 364 7112',
          email: '',
        }
      ,
      lat: '',
      long: ''
    },             

    
  ];
  constructor() { }
}
