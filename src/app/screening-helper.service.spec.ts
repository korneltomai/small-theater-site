import { TestBed } from '@angular/core/testing';

import { ScreeningHelperService } from './screening-helper.service';

describe('ScreeningHelperService', () => {
  let service: ScreeningHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreeningHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
