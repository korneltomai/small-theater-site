import { inject  } from '@angular/core';
import { MovieService } from './movie.service';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Movie } from './movie';

export const movieResolver: ResolveFn<Movie | undefined> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(MovieService).getMovie(Number(route.paramMap.get('id')!));
};

export const moviesResolver: ResolveFn<Movie[] | undefined> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(MovieService).getMovies();
};
