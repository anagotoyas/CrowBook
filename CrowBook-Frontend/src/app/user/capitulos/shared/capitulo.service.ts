import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Capitulo } from './capitulo.model';
import { Usuario } from 'src/app/usuario';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class CapituloService {
    private apiBase: string = environment.apiBase;
  
    constructor(private http: HttpClient) { }
  
    getAllCapitulos(id: number){
      return this.http.get<Capitulo[]>(`${this.apiBase}/capitulos/listarPorHistoria?historia=${id}`);
    }
   
    create(capitulo: Capitulo) {
      return this.http.post(`${this.apiBase}/capitulos`,capitulo );
    }
    getCapituloPorId(id: number){
      return this.http.get<Capitulo>(`${this.apiBase}/capitulos/${id}`)
    }
    modify(capitulo: Capitulo){
      return this.http.put(`${this.apiBase}/capitulos`, capitulo);
    }
    delete(id: number){
      return this.http.delete(`${this.apiBase}/capitulos/${id}`);
    }

    test(){
console.log('ok')
    }
  
  }

