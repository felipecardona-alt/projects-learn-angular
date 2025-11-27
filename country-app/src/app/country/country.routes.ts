import { Routes } from '@angular/router';
import { ByCapitalPage } from './pages/by-capital-pages/by-capital-pages';
import { CountryLayout } from './layouts/CountryLayout/CountryLayout';
import { ByRegionPage } from './pages/by-region-page/by-region-page';
import { ByCountryPage } from './pages/by-country-page/by-country-page';
import { CountryPage } from './pages/country-page/country-page';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPage,
      },
      {
        path: 'by-country',
        component: ByCountryPage,
      },
      {
        path: 'by-region',
        component: ByRegionPage,
      },
      {
        path: 'by/:country',
        component: CountryPage,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      }
    ]
  }
];

export default countryRoutes;
