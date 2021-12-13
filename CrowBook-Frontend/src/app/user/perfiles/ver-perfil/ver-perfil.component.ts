import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Historia } from '../../historias/shared/historia.model';
import { HistoriaService } from '../../historias/shared/historia.service';
import { Usuario } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.css']
})
export class VerPerfilComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'usuario','categoria', 'acciones'];
  dataSource: Usuario;
  dataSource2: MatTableDataSource<Usuario>;
  dataSource3: MatTableDataSource<Historia>;

  constructor(
    private usuarioService: UsuarioService,
    private historiaService: HistoriaService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUsuarioPorId();
    this.getFavoritos();
  }

  getUsuarioPorId(){
    const params = this.activeRoute.snapshot.params;
    if (params['idUsuario']) {
      this.usuarioService.getUsuarioPorId(params['idUsuario']).subscribe((data:any) => {
        this.dataSource = data['body'];
      });
      this.usuarioService.getUsuarioPorId(params['idUsuario']).subscribe((data: any) =>{
        this.dataSource2 = new MatTableDataSource(data['body']);
        console.log(data);
      });      

    }
  }

  getFavoritos(){
    const params = this.activeRoute.snapshot.params;
    this.historiaService.verFavoritos(params['idUsuario']).subscribe((data)=>{
      this.dataSource3= new MatTableDataSource(data);
      console.log(data)
    });
  }

  verHistoria(idHistoria: number){
    this.router.navigate(['user/historias/', Number(sessionStorage.getItem('idUsuario')),'ver', idHistoria]);
  }


}
