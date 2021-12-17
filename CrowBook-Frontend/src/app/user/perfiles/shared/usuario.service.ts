import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from './usuario.model';
import { Historia } from '../../historias/shared/historia.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) { }

  getAllUsuarios(){
    return this.http.get<Usuario[]>(`${this.apiBase}/usuarios`);
  }

  create(usuario: Usuario) {
    return this.http.post(`${this.apiBase}/usuarios`, usuario);
  }

  edit(usuario: Usuario) {
    return this.http.put(`${this.apiBase}/usuarios`, usuario);
  }

  delete(idUsuario: number) {
    return this.http.delete<Usuario>(`${this.apiBase}/usuarios/${idUsuario}`)
  }

  getUsuarioPorId(idUsuario: number){
    return this.http.get<Usuario>(`${this.apiBase}/usuarios/${idUsuario}`);

  }

  getidUsuarioPorIdHistoria(idHistoria: number){
    return this.http.get<number>(`${this.apiBase}/usuarios/idUsuarioPorIdHistoria?historia=${idHistoria}`);
  }

  getCantidadCrowCoins(idUsuario: number){
    return this.http.get<number>(`${this.apiBase}/usuarios/cantidadCoinsPorIdUsuario?idUsuario=${idUsuario}`);
  }

}

