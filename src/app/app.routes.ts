import { Routes } from '@angular/router';
import { authGuard } from './core/guard';

export const routes: Routes = [
  {
    path: '',
     data: { pageTitle: 'Home' },
    loadChildren: () => import('./pages/user/user.routes').then((c) => c.userRoutes),
    canActivate: [authGuard],
  },

  {
    path: 'auth',
    data: { pageTitle: 'login Page' },
    loadChildren: () => import('./pages/auth/auth.routes').then((c) => c.authRoutes),
  },
];
