import { inject  } from '@angular/core';
import { MovieService } from './movie.service';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Movie } from './movie';
import { Screening } from './screening';

export const movieResolver: ResolveFn<Movie | undefined> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(MovieService).getMovie(Number(route.paramMap.get('movieId')!));
};

export const moviesResolver: ResolveFn<Movie[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(MovieService).getMovies();
};

export const screeningResolver: ResolveFn<Screening | undefined> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(MovieService).getScreening(Number(route.paramMap.get('movieId')!), Number(route.paramMap.get('screeningId')!));
};
