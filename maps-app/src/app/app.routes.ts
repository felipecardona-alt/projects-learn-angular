import { Routes } from '@angular/router';
import { FullscreenMapPage } from './pages/fullscreen-map-page/fullscreen-map-page';

export const routes: Routes = [
    {
        path: 'fullscreen',
        component: FullscreenMapPage,
        title: 'FullScreen Map'
    },
    {
        path: 'markers',
        component: FullscreenMapPage,
        title: 'Marcadores'
    },
    {
        path: 'houses',
        component: FullscreenMapPage,
        title: 'Propiedades disponibles'
    },
    {
        path: '**',
        redirectTo: 'fullscreen,'
    }
];
