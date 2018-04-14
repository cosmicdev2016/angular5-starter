import { TestBed, inject } from '@angular/core/testing';

import { ForObserableService } from './for-obserable.service';

describe('ForObserableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForObserableService]
    });
  });

  it('should be created', inject([ForObserableService], (service: ForObserableService) => {
    expect(service).toBeTruthy();
  }));
});
