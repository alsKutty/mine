import { TestBed, inject } from '@angular/core/testing';

import { mineService } from './mine.service';

describe('mineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [mineService]
    });
  });

  it('should be created', inject([mineService], (service: mineService) => {
    expect(service).toBeTruthy();
  }));
});
