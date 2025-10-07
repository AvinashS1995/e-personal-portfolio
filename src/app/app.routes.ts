import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/public/public.routes').then((m) => m.PUBLIC_ROUTES),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./pages/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
        // canActivate: [AuthGuard],
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
