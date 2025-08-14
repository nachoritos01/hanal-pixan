import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: 'pib',
    loadComponent: () => import('./features/pib/pib.component').then(c => c.PibComponent)
  },
  {
    path: 'xibalba',
    loadComponent: () => import('./features/xibalba/xibalba.component').then(c => c.XibalbaComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];