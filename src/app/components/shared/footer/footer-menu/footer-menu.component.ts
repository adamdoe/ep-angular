import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.less']
})
export class FooterMenuComponent implements OnInit {


  footerDesktopMenu;
  footerMobileMenu
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.footerDesktopMenu = this.menuService.getMenus().footerDesktop;
    this.footerMobileMenu = this.menuService.getMenus().footerMobile;

  }



}
