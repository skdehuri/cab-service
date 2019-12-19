import { TestBed } from '@angular/core/testing';

import { CabBookingService } from './cab-booking.service';

describe('CabBookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CabBookingService = TestBed.get(CabBookingService);
    expect(service).toBeTruthy();
  });
});
