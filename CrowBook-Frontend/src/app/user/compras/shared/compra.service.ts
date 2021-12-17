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

  getMisCompras(id: number){
    return this.http.get<Compra[]>(`${this.apiBase}/compras/buscarPorIdUsuario?usuario=${id}`);
  }

  crearCompra(compra: Compra){
    return this.http.post<Compra>(`${this.apiBase}/compras`, compra);
  }
}
