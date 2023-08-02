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
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  currentUrl: string = window.location.pathname;
  navbarItems: NavbarItem[] = [
    {
      path: '/',
      icon: '../../../assets/icons/home-active.svg',
      activeIcon: '../../../assets/icons/home.svg',
      name: 'Home',
    },
    {
      path: '/search',
      icon: '../../../assets/icons/search-active.svg',
      activeIcon: '../../../assets/icons/search.svg',
      name: 'Search',
    },
    {
      path: '/watchlist',
      icon: '../../../assets/icons/save-active.svg',
      activeIcon: '../../../assets/icons/save.svg',
      name: 'Watchlist',
    },
  ];
}
