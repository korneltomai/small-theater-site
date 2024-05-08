import { inject  } from '@angular/core';
import { ScreeningService } from './screening.service';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Screening } from './screening';

export const screeningResolver: ResolveFn<Screening | undefined> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(ScreeningService).getScreening(Number(route.paramMap.get('id')!));
};

export const screeningsResolver: ResolveFn<Screening[] | undefined> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(ScreeningService).getScreenings(Number(route.paramMap.get('id')!));
};