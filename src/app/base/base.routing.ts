import { Routes, RouterModule,  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DashboardComponent }   from '../dashboard/dashboard.component';
import { UserComponent }   from '../user/user.component';
import { TableComponent }   from '../table/table.component';
import { TypographyComponent }   from '../typography/typography.component';
import { IconsComponent }   from '../icons/icons.component';
import { NotificationsComponent }   from '../notifications/notifications.component';
import { UpgradeComponent }   from '../upgrade/upgrade.component';
import { AuthComponent } from '../auth/auth.component';

import { VideoTutorialsComponent } from '../video-tutorials/video-tutorials.component';

import { BaseComponent } from './base.component';

export const baseRoutes: Routes = [
    {
      path : 'admin',
      component : BaseComponent,

      children : [
      // {
      //     path: '',
      //     redirectTo: 'dashboard',
      //     pathMatch: 'full',
      // },
    {
        path: 'dashboard',
        component: DashboardComponent,


    },
    {
      path : 'video-tutorials',
      component : VideoTutorialsComponent
    },
    {
        path: 'user',
        component: UserComponent,

    },
    {
        path: 'table',
        component: TableComponent,

    },
    {
        path: 'typography',
        component: TypographyComponent,

    },
    {
        path: 'icons',
        component: IconsComponent,


    },

    {
        path: 'notifications',
        component: NotificationsComponent,

    },
    {
        path: 'upgrade',
        component: UpgradeComponent,

    }
  ]
}
]
export const routing: ModuleWithProviders = RouterModule.forChild(baseRoutes);
