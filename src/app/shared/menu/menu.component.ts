import { Component, OnInit } from '@angular/core';

interface MenuItem {
  path: string;
  text: string;
};


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class MenuComponent {

  menu: MenuItem[] = [
    {
      path: '/graphics/bars',
      text: 'Bar Chart'
    },
    {
      path: '/graphics/double-bars',
      text: 'Double Bars Chart'
    },
    {
      path: '/graphics/doughnut',
      text: 'Doughnut Chart'
    },
    {
      path: '/graphics/doughnut-http',
      text: 'Doughnut Chart HTTP'
    },
  ];

}
