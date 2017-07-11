import { Routes, RouterModule,PreloadAllModules }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  { path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
   },
    { path: '',
    loadChildren:'./auth/auth.module#AuthModule'
   },
   {
    path: 'admin',
    loadChildren: './base/base.module#BaseModule'
   }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules });
