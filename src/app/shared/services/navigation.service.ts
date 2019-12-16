import {AfterViewInit, Injectable, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


export interface IMenuItem {
  id?: string;
  title?: string;
  description?: string;
  type: string;       // Possible values: link/dropDown/extLink
  name?: string;      // Used as display text for item and title for separator type
  state?: string;     // Router state
  icon?: string;      // Material icon name
  tooltip?: string;   // Tooltip text
  disabled?: boolean; // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]; // Dropdown items
  badges?: IBadge[];
  active?: boolean;
  image?: string;
  imagehover?: string;
}

export interface IChildItem {
  id?: string;
  parentId?: string;
  type?: string;
  name: string;       // Display text
  state?: string;     // Router state
  icon?: string;
  sub?: IChildItem[];
  active?: boolean;
  disabled?: boolean;
  image?: string;
  imagehover?: string;
}

interface IBadge {
  color: string;      // primary/accent/warn/hex color codes(#fff000)
  value: string;      // Display text
}

interface ISidebarState {
  sidenavOpen?: boolean;
  childnavOpen?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService implements OnInit {

  languageChanges = true;

  public sidebarState: ISidebarState = {
    sidenavOpen: true,
    childnavOpen: false
  };

  constructor() {
  }

  defaultMenu: IMenuItem[] = [
    {
      name: 'DASHBOARD',
      description: 'Dashboard',
      type: 'link',
      image: 'assets/images/menu-icon/normal/dashboard.svg',
      imagehover: 'assets/images/menu-icon/hover/dashboard.svg',
      state: '/dashboard'
    },
    {
      name: 'PROFILES',
      description: 'profiles',
      type: 'link',
      image: 'assets/images/menu-icon/normal/users.svg',
      imagehover: 'assets/images/menu-icon/hover/users.svg',
      state: '/profiles'
    },
    {
      name: 'TICKETS',
      description: 'profiles',
      type: 'link',
      image: 'assets/images/menu-icon/normal/tickets.svg',
      imagehover: 'assets/images/menu-icon/hover/tickets.svg',
      state: '/tickets'
    },
    {
      name: 'DESKS',
      description: 'desks',
      type: 'link',
      image: 'assets/images/menu-icon/normal/tickets.svg',
      imagehover: 'assets/images/menu-icon/hover/tickets.svg',
      state: '/desks'
    },
    {
      name: 'SERVICES',
      description: 'profiles',
      type: 'link',
      image: 'assets/images/menu-icon/normal/services.svg',
      imagehover: 'assets/images/menu-icon/hover/services.svg',
      state: '/services'
    },
    {
      name: 'REPORTS',
      description: 'profiles',
      type: 'link',
      image: 'assets/images/menu-icon/normal/reports.svg',
      imagehover: 'assets/images/menu-icon/hover/reports.svg',
      state: '/reports'
    },
    {
      name: 'USERS',
      description: 'profiles',
      type: 'link',
      image: 'assets/images/menu-icon/normal/users.svg',
      imagehover: 'assets/images/menu-icon/hover/users.svg',
      state: '/dashboard'
    },
    // {
    //   name: 'SUB SAMPLE',
    //   type: 'dropDown',
    //   tooltip: 'Documentation',
    //   icon: 'fa fa-briefcase',
    //   sub: [
    //     {icon: 'fa fa-sellsy', name: 'SUB1', state: '/product/providers', type: 'link'},
    //     {icon: 'fa fa-product-hunt', name: 'SUB2', state: '/product/products', type: 'link'},
    //     {icon: 'pi pi-briefcase', name: 'SUB3', state: '/product/catalog', type: 'link'},
    //     {
    //       icon: 'fa fa-sitemap', name: 'SUB4', type: 'dropDown',
    //       sub: [
    //         {icon: 'fa fa-money', name: 'SUB Sub1', state: '/product/product-pricing', type: 'link'},
    //         {
    //           icon: 'fa fa-gg-circle',
    //           name: 'SUB sub2',
    //           state: '/product/catalog-pricing',
    //           type: 'link'
    //         },
    //       ]
    //     }
    //   ]
    // }
  ];

  menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();


  ngOnInit(): void {

  }

}
