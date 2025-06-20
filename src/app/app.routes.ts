import { Routes } from '@angular/router';
import { MainLayout } from './waar-is-lotte/main-layout/main-layout';
import { Home } from './waar-is-lotte/Left/home/home';
import { About } from './waar-is-lotte/Left/about/about';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'home', component: Home },
      { path: 'about', component: About },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  }
];