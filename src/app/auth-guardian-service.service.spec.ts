import { TestBed } from '@angular/core/testing';

import { AuthGuardianServiceService } from './auth-guardian-service.service';

describe('AuthGuardianServiceService', () => {
  let service: AuthGuardianServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardianServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
