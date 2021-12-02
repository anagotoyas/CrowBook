import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient){

    }
    
    
    
}
