import { Routes } from '@angular/router';
import { authRoutes } from './features/authentication/authentication.routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'authenticate',
        children: authRoutes,
    },
    {
        path: '**',
        redirectTo: 'authenticate/login',
        pathMatch: 'full'
    },

];
