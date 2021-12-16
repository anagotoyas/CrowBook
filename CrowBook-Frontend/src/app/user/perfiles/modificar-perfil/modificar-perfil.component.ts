import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.css']
})
export class ModificarPerfilComponent implements OnInit {
  dataSource: Usuario
  constructor(
    public usuarioService: UsuarioService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }
  getUsuarioPorId(){
    this.usuarioService.getUsuarioPorId(Number(sessionStorage.getItem('idUsuario'))).subscribe((data:any) => {
      this.dataSource = data['body'];
    });
  }
  editUsuario(usuario: Usuario){
    this.usuarioService.edit(usuario).subscribe(
      ()=>{
        this.router.navigate(['user/ver-mi-perfil']);
      },
      (error: any)=> {}
    );
  }
  }


