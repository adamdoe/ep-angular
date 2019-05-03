import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent implements OnInit {

  menu;
  navbar = {
        logo: 'https://dev2.eaton-partners.com/assets/img/eaton_nb.png'
      };


  constructor( private menuService: MenuService ) { }

  ngOnInit() {
    this.menu = this.menuService.getMenus().main;
  }
}
