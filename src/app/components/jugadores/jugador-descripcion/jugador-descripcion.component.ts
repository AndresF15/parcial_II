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
  jugador: Jugadores[] = []
  nombre: String

  constructor(private _jugadorService:JugadoresAndresFelipeHoyosService, private _route:ActivatedRoute) {
    this.jugador = [{
      nombre: "",
      nombre_pila: "",
      bio: "",
      equipo: "",
      img: "",
      img_main: "",
      nacimiento: "",
      seleccion: ""
    }]
    this.nombre = ""
  }

  ngOnInit(): void {
    this.jugadores = this._jugadorService.getJugadores()
    this.getJugador()
  }

  getJugador():void{
    this.nombre = this._route.snapshot.paramMap.get("nombre")!
    for (let jugador of this.jugadores){
      if (jugador.nombre == this.nombre){
        this.jugador = [{
          nombre: jugador.nombre,
          nombre_pila: jugador.nombre_pila,
          bio: jugador.bio,
          equipo: jugador.equipo,
          img:jugador.img,
          img_main: jugador.img_main,
          nacimiento: jugador.nacimiento,
          seleccion: jugador.seleccion
        }]
      }
    }
  }
}
