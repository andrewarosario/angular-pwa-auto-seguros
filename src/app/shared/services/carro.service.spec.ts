import { TestBed } from '@angular/core/testing';

import { CarroService } from './carro.service';

describe('CarroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarroService = TestBed.get(CarroService);
    expect(service).toBeTruthy();
  });
});
