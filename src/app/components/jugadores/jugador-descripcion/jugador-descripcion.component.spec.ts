import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorDescripcionComponent } from './jugador-descripcion.component';

describe('JugadorDescripcionComponent', () => {
  let component: JugadorDescripcionComponent;
  let fixture: ComponentFixture<JugadorDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorDescripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
