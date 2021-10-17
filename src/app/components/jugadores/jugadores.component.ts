import { Component, OnInit } from '@angular/core';

import { JugadoresAndresFelipeHoyosService } from 'src/app/services/jugadores-andres-felipe-hoyos.service';
import { Jugadores } from '../../services/jugadores-andres-felipe-hoyos.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
