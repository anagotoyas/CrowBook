import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'; /* ? */
import { Comentario } from './comentario.model'

@Injectable({
    providedIn: 'root'
  })
  export class ComentarioService {
    private apiBase: string = environment.apiBase;
  
    constructor(private http: HttpClient) { }
  
    create(comentario: Comentario) {
      return this.http.post(`${this.apiBase}/comentarios`,comentario );
    }
  
    getCapituloPorIdCapitulo(id: number){
        return this.http.get<Comentario[]>(`${this.apiBase}/comentarios/buscarPorIdCapitulo?capitulo=${id}`)
    }

    deleteComentario(idComentario: number){
        return this.http.delete<Comentario>(`${this.apiBase}/comentarios/${idComentario}`)
    }

    editComentario(comentario: Comentario) {
        return this.http.put(`${this.apiBase}/comentarios`,comentario );
    }

    getComentarioPorId(id: number){
        return this.http.get<Comentario>(`${this.apiBase}/comentarios/${id}`)
    }
}
