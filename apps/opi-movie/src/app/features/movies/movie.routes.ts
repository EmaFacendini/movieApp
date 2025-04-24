
import { Routes } from "@angular/router";


const movieRoutes: Routes = [
    {
        path: 'movies',
        loadComponent: () => import('./movies.component').then(m => m.MoviesComponent), 
    },
    {
        path: ':movieId',
        loadComponent: () => import('./movie-detail/detail.component').then(m => m.DetailComponent),
    }
];

export default movieRoutes;