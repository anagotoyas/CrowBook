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

  getAllHistorias() {
    return this.http.get<Historia[]>(`${this.apiBase}/historias`);
  }

  create(historia: Historia) {
    return this.http.post(`${this.apiBase}/historias`, historia);
  }
}
