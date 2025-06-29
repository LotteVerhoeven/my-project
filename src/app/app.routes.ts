import { Routes } from '@angular/router';
import { MainLayout } from './waar-was-lotte/main-layout/main-layout';
import { Home } from './waar-was-lotte/Left/home/home';
import { About } from './waar-was-lotte/Left/about/about';
import { WorkExperience } from './waar-was-lotte/Left/work-experience/work-experience';
import { Tech } from './waar-was-lotte/Left/tech/tech';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'home', component: Home },
      { path: 'about', component: About },
      { path: 'work-experience', component: WorkExperience },
      { path: 'tech', component: Tech },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  }
];