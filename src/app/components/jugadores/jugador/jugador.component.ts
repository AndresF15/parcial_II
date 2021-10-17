import { Component, OnInit } from '@angular/core';
import { JugadoresAndresFelipeHoyosService, Jugadores} from 'src/app/services/jugadores-andres-felipe-hoyos.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  jugadores:Jugadores[] = []

  constructor(private _jugadoresService:JugadoresAndresFelipeHoyosService) {
   }

  ngOnInit(): void {
    this.jugadores = this._jugadoresService.getJugadores();
    console.log(this.jugadores)
  }
}
