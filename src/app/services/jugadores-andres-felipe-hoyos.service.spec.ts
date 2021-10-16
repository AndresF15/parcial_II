import { TestBed } from '@angular/core/testing';

import { JugadoresAndresFelipeHoyosService } from './jugadores-andres-felipe-hoyos.service';

describe('JugadoresAndresFelipeHoyosService', () => {
  let service: JugadoresAndresFelipeHoyosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JugadoresAndresFelipeHoyosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
