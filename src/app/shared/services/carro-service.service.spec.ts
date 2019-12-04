import { TestBed } from '@angular/core/testing';

import { CarroServiceService } from './carro-service.service';

describe('CarroServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarroServiceService = TestBed.get(CarroServiceService);
    expect(service).toBeTruthy();
  });
});
