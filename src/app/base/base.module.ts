import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routing } from './base.routing';
import { SidebarModule } from '../sidebar/sidebar.module';
import { FooterModule } from '../shared/footer/footer.module';
import { NavbarModule} from '../shared/navbar/navbar.module';
import { FixedPluginModule} from '../shared/fixedplugin/fixedplugin.module';


import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';

import { DashboardComponent }   from '../dashboard/dashboard.component';
import { UserComponent }   from '../user/user.component';
import { TableComponent }   from '../table/table.component';
import { TypographyComponent }   from '../typography/typography.component';
import { IconsComponent }   from '../icons/icons.component';
import { NotificationsComponent }   from '../notifications/notifications.component';
import { UpgradeComponent }   from '../upgrade/upgrade.component';
import { VideoTutorialsComponent } from '../video-tutorials/video-tutorials.component';
import { BaseComponent } from './base.component';



@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    UpgradeComponent,
    BaseComponent,
    VideoTutorialsComponent
  ],
  imports: [
    BrowserModule,
    VgCoreModule,
   VgControlsModule,
   VgOverlayPlayModule,
   VgBufferingModule,
    routing,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule
  ],
  exports : [
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    UpgradeComponent,
    BaseComponent,
    VideoTutorialsComponent,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule
  ]

})
export class BaseModule { }
