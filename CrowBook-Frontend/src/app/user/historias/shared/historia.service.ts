import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Historia, Capitulo } from './historia.model';
import { Usuario } from 'src/app/usuario';
import { bufferWhen, Observable } from 'rxjs';

const sampleHistory: Historia[] = [{
  idHistoria: 1,
  "usuario": {
        "idUsuario": 1,
        "nombreUsuario": null,
        "descripcionUsuario": null,
        "correo": null,
        "contrasenaUsuario": null,
        "cantidadCrowCoins": 0,
        "esMiembro": false,
        "membresia": null
    },
  "nombreHistoria": "Burus y sus loro",
    "imagenPortada": "burumorido.png",
    "descripcionHistoria": "Había una vez un niño llamado Buru q lloró y murió",
    "cantidadResenas": 0,
    "calificacionTotal": 0,
    "fechaPublicacion": "04/12/2021",
    "categoria": {
        "idCategoria": 1,
        "nombreCategoria": null
    }
},
{
  idHistoria: 2,
  "usuario": {
        "idUsuario": 1,
        "nombreUsuario": null,
        "descripcionUsuario": null,
        "correo": null,
        "contrasenaUsuario": null,
        "cantidadCrowCoins": 0,
        "esMiembro": false,
        "membresia": null
    },
  "nombreHistoria": "Algo mas",
    "imagenPortada": "burumorido.png",
    "descripcionHistoria": "Había una vez un niño llamado Buru q lloró y murió",
    "cantidadResenas": 0,
    "calificacionTotal": 0,
    "fechaPublicacion": "04/12/2021",
    "categoria": {
        "idCategoria": 1,
        "nombreCategoria": null
    }
}]

const  mockCapitulos: Capitulo[] = [
  {
    id: 1,
    idHistoria: 1,
    nombreCapitulo: "Primer capitulo",
    contenidoCapitulo: "Test primer capitulo conetnido",
    calificacion: 3,
    cantidadComentarios: 10,
  },
  {
    id: 2,
    idHistoria: 1,
    nombreCapitulo: "Segundo capitulo",
    contenidoCapitulo: "Test segundo capitulo conetnido",
    calificacion: 5,
    cantidadComentarios: 0,
  },
  {
    id: 3,
    idHistoria: 1,
    nombreCapitulo: "Tercer capitulo",
    contenidoCapitulo: "Diego estuvo aqui",
    calificacion: 5,
    cantidadComentarios: 0,
  },
  {
    id: 4,
    idHistoria: 1,
    nombreCapitulo: "Soy DiegoMan",
    contenidoCapitulo: "Diego estuvo aqui",
    calificacion: 5,
    cantidadComentarios: 0,
  },
  {
    id: 5,
    idHistoria: 1,
    nombreCapitulo: "Soy JampierMan",
    contenidoCapitulo: "Diego estuvo aqui",
    calificacion: 5,
    cantidadComentarios: 0,
  },
  {
    id: 6,
    idHistoria: 1,
    nombreCapitulo: "Soy Spiderman",
    contenidoCapitulo: "Diego estuvo aqui",
    calificacion: 5,
    cantidadComentarios: 0,
  }
]


@Injectable({
  providedIn: 'root'
})
export class HistoriaService {
  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) { }

  getAllHistorias(){
    // return this.http.get<Historia[]>(`${this.apiBase}/historias`);
    return new Observable<Historia[]>((observer) => {
      observer.next(sampleHistory)
      return {
        unsubscribe() {
          console.log('nothing')
        }
      }
    })
  }
  /*
  getMisHistorias(usuario: Usuario): Observable<Usuario[]>{
    return this.http.post<Usuario[]>(`${this.apiBase}/historias/stories`, usuario)
  }*/
  getMisHistorias(id: string){
    return this.http.get<any>(`${this.apiBase}/historias/buscarPorIdUsuario?usuario=${id}`);
  }
  create(historia: Historia) {
    return this.http.post(`${this.apiBase}/historias`,historia );
  }
  getHistoriaPorId(id: number){
    // return this.http.get<Historia>(`${this.apiBase}/historias/${id}`)
    return new Observable<Historia>((observer) => {
      observer.next(sampleHistory[id - 1])
      return {
        unsubscribe() {
          console.log('nothing')
        }
      }
    })
  }

  getCapitulosPorHistoria(historiaID: number) {
    // return this.http.post<Capitulo[]>(`${this.apiBase}/historias/stories`, usuario)
    return new Observable<Capitulo[]>((observer) => {
      observer.next(mockCapitulos)
      return {
        unsubscribe() {
          console.log('nothing')
        }
      }
    })
  }
  getHistoriaPorId2(id: number){
    return this.http.get<Historia[]>(`${this.apiBase}/historias/${id}`)
  }
  edit(historia: Historia) {
    return this.http.put(`${this.apiBase}/historias`,historia );
  }
  deleteHistoria(idHistoria: number) {
    return this.http.delete<Historia>(`${this.apiBase}/historias/${idHistoria}`)
  }

}
