import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cancion } from '../models/cancion';

import { Reproductor } from '../services/reproductor.service';

@Component({
  selector: 'app-reproductor-musica',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reproductor-musica.component.html',
  styleUrl: './reproductor-musica.component.css'
})
export class ReproductorMusicaComponent implements OnInit {

  lista_canciones:Cancion[]=[];
  nombre_cancion:string="";

  constructor(private reproductor:Reproductor){}

  ngOnInit():void{
    this.reproductor.getCanciones().subscribe(lista_canciones=>{
      this.lista_canciones=lista_canciones;
    })
  }

  addCancion():void{

    this.reproductor.addCancion(this.nombre_cancion);
    this.nombre_cancion="";

  }

  deleteCancion(): void {
    if (this.nombre_cancion) {
      this.reproductor.deleteCancion(this.nombre_cancion);
      this.nombre_cancion = ""; 
      this.updateCanciones(); 
    }
  }

  private updateCanciones(): void {
    this.reproductor.getCanciones().subscribe(lista_canciones => {
      this.lista_canciones = lista_canciones;
    });
  }



}
