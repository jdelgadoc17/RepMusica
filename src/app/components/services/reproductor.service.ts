import { Injectable } from "@angular/core";

import { Cancion } from "../models/cancion";
import { Observable, of } from "rxjs";

@Injectable ({
    providedIn:"root"
})

export class Reproductor{

    private lista_canciones:Cancion[]=[
        {id:1, nombre_cancion:"Cancion 1", escuchado:false},
        {id:2, nombre_cancion:"Cancion 2", escuchado:true},
        {id:3, nombre_cancion:"Cancion 3", escuchado:false}

    ]

    constructor(){

    }

    getCanciones():Observable<Cancion[]>{
        return of(this.lista_canciones)
    }

    addCancion(nombre_cancion:string):void{
        const nueva_cancion:Cancion={
            id: this.lista_canciones.length + 1,
            nombre_cancion: nombre_cancion,
            escuchado: false
            
        }

        this.lista_canciones.push(nueva_cancion);

    }

    deleteCancion(nombre_cancion: string): void {
        this.lista_canciones = this.lista_canciones.filter(cancion => cancion.nombre_cancion !== nombre_cancion);
    }
        
    



}