import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Usuario } from './user/perfiles/shared/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiBase: string = environment.apiBase;
  constructor(private http: HttpClient) { }

  signIn(usuario: any){
    return this.http.post<any>(this.apiBase+ '/usuarios/login', usuario);
    
  }
  register(usuario: Usuario){
    return this.http.post(this.apiBase+ '/usuarios', usuario);
  }
}
