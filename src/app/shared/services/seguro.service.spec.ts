import { TestBed } from '@angular/core/testing';

import { SeguroService } from './seguro.service';

describe('SeguroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeguroService = TestBed.get(SeguroService);
    expect(service).toBeTruthy();
  });
});
