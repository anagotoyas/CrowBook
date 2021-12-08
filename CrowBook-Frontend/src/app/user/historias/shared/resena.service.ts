import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Resena } from './resena.model';

@Injectable({
  providedIn: 'root'
})
export class ResenaService {
  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) { }

  create(resena: Resena) {
    return this.http.post(`${this.apiBase}/resenas`,resena );
  }

  getResenaPorIdHistoria(id: number){
    return this.http.get<Resena[]>(`${this.apiBase}/resenas/buscarPorIdHistoria?historia=${id}`)
  }

}
