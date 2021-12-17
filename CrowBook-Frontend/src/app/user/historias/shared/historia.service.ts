import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Historia } from './historia.model';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {
  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) { }

  getAllHistorias(){
    return this.http.get<Historia[]>(`${this.apiBase}/historias`);
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
    return this.http.get<Historia>(`${this.apiBase}/historias/${id}`)
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
  verBiblioteca(idUsuario: number){
    return this.http.get<Historia[]>( `${this.apiBase}/usuarios/${idUsuario}/biblioteca`)
  }
  agregarABiblioteca(idUsuario: number, idHistoria: number){
    return this.http.put(`${this.apiBase}/usuarios/${idUsuario}/biblioteca/${idHistoria}`, null)
  }
  eliminarDeBiblioteca(idUsuario: number, idHistoria: number){
    return this.http.delete<Historia>(`${this.apiBase}/usuarios/${idUsuario}/biblioteca/${idHistoria}`)
  }
  verFavoritos(idUsuario: number){
    return this.http.get<Historia[]>( `${this.apiBase}/usuarios/${idUsuario}/favorito`)
  }
  agregarAFavorito(idUsuario: number, idHistoria: number){
    return this.http.put(`${this.apiBase}/usuarios/${idUsuario}/favorito/${idHistoria}`, null)
  }
  eliminarDeFavorito(idUsuario: number, idHistoria: number){
    return this.http.delete<Historia>(`${this.apiBase}/usuarios/${idUsuario}/favorito/${idHistoria}`)
  }
  getHistoriaPorIdCategoria(idCategoria: number){
    return this.http.get<Historia[]>(`${this.apiBase}/historias/listarPorIdCategoria?idCategoria=${idCategoria}`)
  }
}