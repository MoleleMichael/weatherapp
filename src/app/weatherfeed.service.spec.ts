import { TestBed } from '@angular/core/testing';

import { WeatherfeedService } from './weatherfeed.service';

describe('WeatherfeedService', () => {
  let service: WeatherfeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherfeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
