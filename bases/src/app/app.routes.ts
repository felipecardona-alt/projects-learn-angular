import { HeroPageComponent } from './pages/hero/hero-page.component';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { Routes } from '@angular/router';
import { DragonballPage } from './pages/dragonball/dragonball-page';
import { DragonballSuperPage } from './pages/dragonball-super/dragonball-super-page';

export const routes: Routes = [
  {
    path: 'counter',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: DragonballPage,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPage,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
