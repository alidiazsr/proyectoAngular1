import { TestBed } from '@angular/core/testing';

import { Ejercicio4Service } from './ejercicio4.service';

describe('Ejercicio4Service', () => {
  let service: Ejercicio4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ejercicio4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
