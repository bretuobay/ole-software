import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';





import { AppRoutes } from './app.routing';
import { BaseModule} from './base/base.module';

import { AuthModule } from './auth/';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
   
    AppRoutes,
    BaseModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
