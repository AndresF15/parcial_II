import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jugadores, JugadoresAndresFelipeHoyosService } from '../../../services/jugadores-andres-felipe-hoyos.service';

@Component({
  selector: 'app-jugador-descripcion',
  templateUrl: './jugador-descripcion.component.html',
  styleUrls: ['./jugador-descripcion.component.css']
})
export class JugadorDescripcionComponent implements OnInit {
  jugadores:Jugadores[] = []
  nombre: String

  constructor(private _jugadorService:JugadoresAndresFelipeHoyosService, private _route:ActivatedRoute) {
    this.nombre = ""
  }

  ngOnInit(): void {
    this.getJugador()
    this.jugadores = this._jugadorService.getJugador("")
  }

  getJugador():void{
    this.nombre = this._route.snapshot.paramMap.get("nombre")!
    this._jugadorService.getJugador(this.nombre)
  }
}
