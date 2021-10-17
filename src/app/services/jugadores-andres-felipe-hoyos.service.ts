import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class JugadoresAndresFelipeHoyosService {
  constructor() {}

  private jugadores:Jugadores[]=[
    {
      nombre: "James Rodriguez",
      nombre_pila: "James",
      bio: "futbolista colombiano, que juega como centrocampista y su equipo actual es Al Rayyan S. C. de la Qatar Stars League. Recibió en 2009, 2012 y 2014 el premio de jugador revelación de la Primera División de Argentina y en la Primeira Liga de Portugal.",
      img: "assets/img/james.jpg",
      img_main: "assets/img/james-main.jpg",
      nacimiento: "12 de julio de 1991",
      seleccion:"Colombia",
      equipo:"Everton",
    },
    {
      nombre: "Cristiano Ronaldo",
      nombre_pila: "Ronaldo",
      bio: "futbolista portugués que juega como delantero en el Manchester United Football Club de la Premier League de Inglaterra y en la selección de Portugal, de la cual es su capitán y máximo goleador histórico",
      img: "assets/img/ronaldo.jpg",
      img_main: "assets/img/cristiano-main.jpg",
      nacimiento: "5 de febrero de 1985",
      seleccion:"Portugal",
      equipo:"Manchester UNITED",
    },
    {
      nombre: "Leonel Messi",
      nombre_pila: "Messi",
      bio: "futbolista argentino que juega como delantero o centrocampista en el Paris Saint-Germain de la Ligue 1 de Francia. Es internacional con la selección de Argentina, equipo del que es capitán y máximo goleador histórico.",
      img: "assets/img/messi.jpg",
      img_main: "assets/img/messi-main.jpg",
      nacimiento: " 24 de junio de 1987",
      seleccion:"Argentina",
      equipo:"PSG",
    }
  ];


  jugador:Jugador[]=[
    {
    nombre: "",
    nombre_pila: "",
    bio: "",
    img: "",
    img_main: "",
    nacimiento: "",
    seleccion:"",
    equipo:"",
  }
  ];

  getJugadores():Jugadores[]{
    return this.jugadores
  }

  getJugador(nombre:String):Jugador[]{
    console.log(nombre)
    for (let jugador of this.jugadores){
      if (jugador.nombre == nombre){
          this.jugador = [
          {
            nombre: jugador.nombre,
            nombre_pila: jugador.nombre_pila,
            bio: jugador.bio,
            img: jugador.img,
            img_main: jugador.img_main,
            nacimiento: jugador.nacimiento,
            seleccion:jugador.seleccion,
            equipo: jugador.equipo,
          }
        ]
        
        console.log(this.jugador)
        return this.jugador
      } 
    }
    return this.jugador
  }

}

export interface Jugador{
  nombre: String
  nombre_pila: String
  bio: String
  img: String
  img_main: String
  nacimiento: String
  seleccion: String
  equipo: String
}

export interface Jugadores{
  nombre: String
  nombre_pila: String
  bio: String
  img: String
  img_main: String
  nacimiento: String
  seleccion: String
  equipo: String
}