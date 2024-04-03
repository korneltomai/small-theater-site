import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { GiftPageComponent } from './gift-page/gift-page.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomePageComponent},
    {path: 'about-us', component: AboutPageComponent},
    {path: 'whats-on', component: MoviesPageComponent},
    {path: 'gift', component: GiftPageComponent}
];
