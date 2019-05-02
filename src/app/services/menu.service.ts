import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menus = 
    {
      "main": [
        {
          id: 1,
          text: "About Us",
          link: '/about',
          children: [
            {
              id: 1,
              parentId: 1,
              text: 'About Our Firm',
              link: '33B',
            },
            {
              id: 2,
              parentId: 1,
              text: 'About Our Firm',
              link: '33B',
            },
            {
              id: 3,
              parentId: 1,
              text: 'About Our Firm',
              link: '33B',
            }
          ]
        }
      ],
      "footer": 
        [
          {
            id: 3,
            parentId:1,
            text: 'Who We Are',
            link: '33B',
          },
        ]
    };

  constructor() { }

  getMenus() {
    return this.menus;
  }
}
