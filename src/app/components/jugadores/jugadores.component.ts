import { Component, OnInit } from '@angular/core';

import { JugadoresAndresFelipeHoyosService } from 'src/app/services/jugadores-andres-felipe-hoyos.service';
import { Jugador } from '../../services/jugadores-andres-felipe-hoyos.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  jugadores:Jugador[] = [];

  constructor(private _jugadoresService:JugadoresAndresFelipeHoyosService) { }

  ngOnInit(): void {
    this.jugadores = this._jugadoresService.getHeroes();
    console.log(this.jugadores)
  }

}
