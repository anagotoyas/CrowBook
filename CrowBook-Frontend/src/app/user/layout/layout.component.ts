import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoriaService } from '../historias/shared/historia.service';
import { UsuarioService } from '../perfiles/shared/usuario.service';
import { Usuario } from '../perfiles/shared/usuario.model';
import { RegistrationService } from 'src/app/registration.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  dataSource: Usuario;
  user: any;
  private apiBase: string = environment.apiBase;
  nombre: string;
  constructor(private route: ActivatedRoute, private router: Router,
     public usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.getUsuarioPorId()
   
    
  }
  signOut(){
    this.router.navigate([``]);
  }
  getUsuarioPorId(){
   this.usuarioService.getUsuarioPorId(Number(sessionStorage.getItem('idUsuario'))).subscribe((data: any) => {
     this.dataSource=data['body']
     this.nombre=this.dataSource.nombreUsuario
     console.log(this.nombre)
   })
  }
  
}