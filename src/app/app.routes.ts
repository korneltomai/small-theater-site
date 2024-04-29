import { Routes, UrlSegment } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { GiftPageComponent } from './gift-page/gift-page.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { movieResolver } from './movie-resolver.service';
import { moviesResolver } from './movie-resolver.service';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'about-us', component: AboutPageComponent},
    {path: 'whats-on', component: MoviesPageComponent, resolve: { movies: moviesResolver }},
    {path: 'gift', component: GiftPageComponent},
    {path: 'movies', redirectTo: '/whats-on', pathMatch: 'full'},
    {path: 'movies/:id', component: MoviePageComponent, resolve: { movie: movieResolver }},
    {path: '**', redirectTo: '/home'}
];