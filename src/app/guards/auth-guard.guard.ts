import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { inject } from '@angular/core';
import { session } from 'src/session/session';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router: Router = inject(Router);
  const protectedRoutes: string[] = ['/dashboard'];
  console.log('Session: ', state.url, session);
  return protectedRoutes.includes(state.url) && !session ? router.navigate(['/']) : true;
};
