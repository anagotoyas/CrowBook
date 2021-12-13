import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-ver-perfiles',
  templateUrl: './ver-perfiles.component.html',
  styleUrls: ['./ver-perfiles.component.css']
})
export class VerPerfilesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'usuario', 'accion'];
  dataSource: MatTableDataSource<Usuario>;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllUsuarios();
  }

  getAllUsuarios(){
    this.usuarioService.getAllUsuarios().subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource(data['body']);
    });
  }

  applyFilter(value: string){
    this.dataSource.filter = value.trim().toLowerCase();
  }


}
