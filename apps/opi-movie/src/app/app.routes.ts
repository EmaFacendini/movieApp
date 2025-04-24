import { Route } from '@angular/router';

export const appRoutes: Route[] = [

    {
        path: '',
        loadChildren: () => import('./features/movies/movie.routes').then(m => m.default),
    },
    {
        path: '**',
        redirectTo: 'movies',
        pathMatch: 'full',
    }
];
