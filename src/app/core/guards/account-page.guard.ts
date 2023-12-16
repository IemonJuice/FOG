import { CanActivateFn } from '@angular/router';

export const AccountPageCanActivateGuard: CanActivateFn = (route, state) => {
  return true;
};
