import { TestBed } from '@angular/core/testing';

import { ChochesService } from './choches.service';

describe('ChochesService', () => {
  let service: ChochesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChochesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
