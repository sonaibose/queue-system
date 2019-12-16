import {Component, OnInit} from '@angular/core';
import {IMenuItem, NavigationService} from '../../../shared/services/navigation.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  nav: IMenuItem[];
  selectedItem: IMenuItem;
  activeMenu: any = new Object();

  constructor(private navService: NavigationService) {
  }

  ngOnInit() {

    this.navService.menuItems$
      .subscribe((items: IMenuItem[]) => {
        this.nav = [];
        items.map(data => {
          if (!data.disabled) {
            this.nav.push(data);
          }
        });
        // this.setActiveFlag();
      });
  }


  onClickChangeActiveFlag(item) {
    this.setActiveMainItem(item);
  }


  setActiveMainItem(item) {
    this.nav.forEach(ite => {
      ite.active = false;
    });
    item.active = true;
  }

  closeChildNav() {
    this.navService.sidebarState.childnavOpen = false;
    this.setActiveFlag();
  }

  checkChildNav(item) {

    console.log('mouse in');
    this.activeMenu = new Object();
    this.activeMenu[item.name] = true;
    if (_.size(item.sub) === 0 && !_.isUndefined(item.sub)) {
      this.navService.sidebarState.childnavOpen = false;
    }
  }

  getImage(item) {
    if (this.activeMenu[item.name]) {
      if (item.imagehover) {
        return item.imagehover;
      }
    } else {
      if (item.image) {
        return item.image;
      }
    }
  }

  selectItem(item) {
    this.navService.sidebarState.childnavOpen = true;
    this.selectedItem = item;
    this.setActiveMainItem(item);
  }


  setActiveFlag() {
    // if (window && window.location) {
    //   const activeRoute = window.location.hash || window.location.pathname;
    //   this.nav.forEach(item => {
    //     item.active = false;
    //     if (activeRoute.indexOf(item.state) !== -1) {
    //       this.selectedItem = item;
    //       item.active = true;
    //     }
    //     if (item.sub) {
    //       item.sub.forEach(subItem => {
    //         subItem.active = false;
    //         if (activeRoute.indexOf(subItem.state) !== -1) {
    //           this.selectedItem = item;
    //           item.active = true;
    //         }
    //         if (subItem.sub) {
    //           subItem.sub.forEach(subChildItem => {
    //             if (activeRoute.indexOf(subChildItem.state) !== -1) {
    //               this.selectedItem = item;
    //               item.active = true;
    //               subItem.active = true;
    //             }
    //           });
    //         }
    //       });
    //     }
    //   });
    // }
  }


  mouseOut() {
    this.activeMenu = new Object();
  }

  mouseUp(item) {
    this.activeMenu = new Object();
    this.activeMenu[item.name] = true;
  }
}
