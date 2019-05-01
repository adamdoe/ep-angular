import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  navbar = {
        logo: 'https://dev2.eaton-partners.com/assets/img/eaton_nb.png'
      };


  constructor() { }

  ngOnInit() {
  }

}
