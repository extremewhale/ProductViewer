import { Routes } from '@angular/router';

import { NotFoundComponent } from '@/info/pages/not-found/not-found.component';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./domains/shared/components/layout/layout.component'),

    loadChildren:()=> [
      {
        path: '',
        loadComponent: () =>
          import('./domains/products/pages/list/list.component'),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./domains/info/pages/about/about.component'),
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import(
            './domains/products/pages/product-detail/product-detail.component'
          ),
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
