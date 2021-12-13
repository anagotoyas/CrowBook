import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PaqueteCrowCoin } from './paquetecrowcoin.model';

@Injectable({
  providedIn: 'root'
})
export class PaqueteCrowCoinService {
  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) { }

  getAllPaqueteCrowCoin(){
    return this.http.get<PaqueteCrowCoin[]>(`${this.apiBase}/paquetes`);
  }

  getPaqueteCrowCoinPorId(id:number){
    return this.http.get<PaqueteCrowCoin>(`${this.apiBase}/paquetes/${id}`);
  }

}
