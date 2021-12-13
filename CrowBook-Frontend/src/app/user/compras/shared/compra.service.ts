import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Compra } from './compra.model';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) { }

  getAllCompras(){
    return this.http.get<Compra[]>(`${this.apiBase}/compras`);
  }
  /*
  getMisHistorias(usuario: Usuario): Observable<Usuario[]>{
    return this.http.post<Usuario[]>(`${this.apiBase}/historias/stories`, usuario)
  }*/
  getMisCompras(id: number){
    return this.http.get<Compra[]>(`${this.apiBase}/compras?usuario=${id}`);
  }
}
