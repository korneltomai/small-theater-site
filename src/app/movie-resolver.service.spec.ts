import { TestBed } from '@angular/core/testing';

import { movieResolver } from './movie-resolver.service';

describe('movieResolver', () => {
  let service: typeof movieResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(movieResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
