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
          link: '#!',
          children: [
            {
              id: 1,
              parentId: 1,
              text: 'Who We Are',
              link: 'about/who-we-are',
            },
            {
              id: 2,
              parentId: 1,
              text: 'Why Choose Us',
              link: 'about/why-choose-us',
            },
            {
              id: 3,
              parentId: 1,
              text: 'Our Approach',
              link: 'about/our-approach',
            }
          ]
        },
        {
          id: 2,
          text: "Capabilities",
          link: '#!',
          children: [
            {
              id: 1,
              parentId: 2,
              text: 'Private Equity',
              link: '/capabilities/private-equity'
            },
            {
              id: 2,
              parentId: 2,
              text: 'Private Credit',
              link: '/capabilities/private-credit'
            },
            {
              id: 3,
              parentId: 2,
              text: 'Real Estate',
              link: '/capabilities/real-estate'
            },
            {
              id: 4,
              parentId: 2,
              text: 'Real Assets',
              link: '/capabilities/real-assets'
            },
            {
              id: 5,
              parentId: 2,
              text: 'Private Credit',
              link: '/capabilities/private-credit'
            },
            {
              id: 6,
              parentId: 2,
              text: 'Hedge Funds',
              link: '/capabilities/hedge-funds'
            },
            {
              id: 7,
              parentId: 2,
              text: 'General Partner Advisory & Directs',
              link: '/capabilities/secondary-advisory-directs'
            },
            {
              id: 8,
              parentId: 2,
              text: 'Emerging Managers',
              link: '/capabilities/emerging-managers'
            },
          ]
        },
        {
          id: 3,
          text: "Insights",
          link: '#!',
          children: [
            {
              id: 1,
              parentId: 3,
              text: 'News & Insights',
              link: '/insights/news/'
            },
            {
              id: 2,
              parentId: 3,
              text: 'Videos',
              link: '/insights/videos/'
            },
          ]
        },
        {
          id: 3,
          text: "Contact Us",
          link: '/contact',
          children: [
          ]
        }

      ],
      "footer": 
        [
          {
            id: 1,
            text: "About Us",
            link: '#!',
            children: [
              {
                id: 1,
                parentId: 1,
                text: 'Who We Are',
                link: 'about/who-we-are',
              },
              {
                id: 2,
                parentId: 1,
                text: 'Why Choose Us',
                link: 'about/why-choose-us',
              },
              {
                id: 3,
                parentId: 1,
                text: 'Our Approach',
                link: 'about/our-approach',
              }
            ]
          },
          {
            id: 2,
            text: "Capabilities",
            link: '#!',
            children: [
              {
                id: 1,
                parentId: 2,
                text: 'Private Equity',
                link: '/capabilities/private-equity'
              },
              {
                id: 2,
                parentId: 2,
                text: 'Private Credit',
                link: '/capabilities/private-credit'
              },
              {
                id: 3,
                parentId: 2,
                text: 'Real Estate',
                link: '/capabilities/real-estate'
              },
              {
                id: 4,
                parentId: 2,
                text: 'Real Assets',
                link: '/capabilities/real-assets'
              },
              {
                id: 5,
                parentId: 2,
                text: 'Private Credit',
                link: '/capabilities/private-credit'
              },
              {
                id: 6,
                parentId: 2,
                text: 'Hedge Funds',
                link: '/capabilities/hedge-funds'
              },
              {
                id: 7,
                parentId: 2,
                text: 'General Partner Advisory & Directs',
                link: '/capabilities/secondary-advisory-directs'
              },
              {
                id: 8,
                parentId: 2,
                text: 'Emerging Managers',
                link: '/capabilities/emerging-managers'
              },
            ]
          },
          {
            id: 2,
            text: "News & Insights",
            link: '#!',
            children: [
              {
                id: 1,
                parentId: 2,
                text: 'News & Insights',
                link: '/insights/news'
              },
              {
                id: 2,
                parentId: 2,
                text: 'Videos',
                link: '/insights/videos'
              }
            ]
          },
          {
            id: 2,
            text: "Legal",
            link: '#!',
            children: [
              {
                id: 1,
                parentId: 2,
                text: 'Disclosure, Terms and Conditions',
                link: '/terms-and-conditions'
              },
              {
                id: 2,
                parentId: 2,
                text: 'Privacy Policy',
                link: '/privacy-policy'
              }
            ]
          },
        ]
    };

  constructor() { }

  getMenus() {
    return this.menus;
  }
}
