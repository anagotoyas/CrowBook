import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) {  }
  getAllCategorias(){
    return this.http.get<Categoria[]>(`${this.apiBase}/categorias`);
  }

}
