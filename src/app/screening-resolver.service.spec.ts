import { TestBed } from '@angular/core/testing';

import { screeningsResolver } from './screening-resolver.service';

describe('screeningsResolver', () => {
  let service: typeof screeningsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(screeningsResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
