import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.less']
})
export class FooterMenuComponent implements OnInit {


  menu;
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.getMenus().footer;
    console.log('EP Footer Menu', this.menu);
  }



}
