import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Membresia } from './membresia.model';

@Injectable({
  providedIn: 'root'
})
export class MembresiaService {

  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) { }

  crearMembresia(membresia: Membresia){
    return this.http.post<Membresia>(`${this.apiBase}/membresias`, membresia);
  }

  getMembresiaDeUsuario(id: number){
    return this.http.get<Membresia>(`${this.apiBase}/membresias/membresiaPorIdUsuario?usuario=${id}`);
  }

  cancelarMembresia(membresia: Membresia){
    return this.http.put(`${this.apiBase}/membresias`, membresia);
  }

  renovarMembresia(membresia: Membresia){
    return this.http.put(`${this.apiBase}/membresias/renovar`, membresia);
  }
}
