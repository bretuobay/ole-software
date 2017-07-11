import { Routes, RouterModule }  from '@angular/router';

import { AuthComponent } from './auth.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
