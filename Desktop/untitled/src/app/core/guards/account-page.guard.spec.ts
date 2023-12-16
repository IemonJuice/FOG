import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { accountPageGuard } from './account-page.guard';

describe('accountPageGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accountPageGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
