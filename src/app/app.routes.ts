import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/layouts/main-layout.component').then(c => c.MainLayoutComponent),
    children: [
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
        path: 'cultura',
        loadComponent: () => import('./features/cultural-elements/cultural-elements.component').then(c => c.CulturalElementsComponent)
      },
      {
        path: 'galeria',
        loadComponent: () => import('./features/gallery/gallery.component').then(c => c.GalleryComponent)
      },
      {
        path: 'testimonios',
        loadComponent: () => import('./features/testimonials/testimonials.component').then(c => c.TestimonialsComponent)
      },
      {
        path: 'compartir',
        loadComponent: () => import('./features/social-sharing/social-sharing.component').then(c => c.SocialSharingComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];