import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'basic',
    title: 'Basic Page',
    loadComponent: () => import('./pages/basic-page/basic-page'),
  },
  {
    path: 'custom',
    title: 'Custom Page',
    loadComponent: () => import('./pages/custom-page/custom-page')
  },
  {
    path: 'numbers',
    title: 'Numbers Page',
    loadComponent: () => import('./pages/numbers-page/numbers-page')
  },
  {
    path: 'uncommon',
    title: 'Uncommon Page',
    loadComponent: () => import('./pages/uncommon-page/uncommon-page')
  },
  {
    path: '**',
    redirectTo: 'basic'
  }

];
