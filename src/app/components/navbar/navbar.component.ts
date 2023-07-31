import { Component } from '@angular/core';

interface NavbarItem {
  path: string;
  icon: string;
  activeIcon: string;
  name: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  currentUrl: string = window.location.pathname;
  navbarItems: NavbarItem[] = [
    {
      path: '/',
      icon: '../../../assets/home-active.svg',
      activeIcon: '../../../assets/home.svg',
      name: 'Home',
    },
    {
      path: '/search',
      icon: '../../../assets/search-active.svg',
      activeIcon: '../../../assets/search.svg',
      name: 'Search',
    },
    {
      path: '/watchlist',
      icon: '../../../assets/save-active.svg',
      activeIcon: '../../../assets/save.svg',
      name: 'Watchlist',
    },
  ];
}
