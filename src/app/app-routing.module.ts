import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SidebarComponent} from './views/layout/sidebar/sidebar.component';
import { DesksComponent } from './views/desks/desks/desks.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    canActivate: [],
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'services',
        loadChildren: './views/service/service.module#ServiceModule'
      },
      {
        path: 'profiles',
        loadChildren: './views/profile/profile.module#ProfileModule'
      },
      {
        path: 'tickets',
        loadChildren: './views/ticket/ticket.module#TicketModule'
      },
      {
        path: 'desks',
        component: DesksComponent
      },
      {
        path: 'reports',
        loadChildren: './views/report/report.module#ReportModule'
      },
      {
        path: 'tickets',
        loadChildren: './views/ticket/ticket.module#TicketModule'
      },
      {
        path: 'users',
        loadChildren: './views/user/user.module#UserModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'others/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes)
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', useHash: true})
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
