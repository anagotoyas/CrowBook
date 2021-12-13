import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Historia } from '../../historias/shared/historia.model';
import { HistoriaService } from '../../historias/shared/historia.service';
import { Usuario } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-ver-mi-perfil',
  templateUrl: './ver-mi-perfil.component.html',
  styleUrls: ['./ver-mi-perfil.component.css']
})
export class VerMiPerfilComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'usuario','categoria', 'ver', 'eliminar'];
  idUsuario: any;
  dataSource: Usuario;
  dataSource2: MatTableDataSource<Historia>;
  dataSource3: MatTableDataSource<Historia>;

  constructor(
    private usuarioService: UsuarioService,
    private historiaService: HistoriaService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.getUsuarioPorId();
    this.getFavoritos();
    this.getBiblioteca();
  }

  getUsuarioPorId(){
    this.usuarioService.getUsuarioPorId(Number(sessionStorage.getItem('idUsuario'))).subscribe((data:any) => {
      this.dataSource = data['body'];
    });
  }

  getFavoritos(){
    this.historiaService.verFavoritos(Number(sessionStorage.getItem('idUsuario'))).subscribe((data)=>{
      this.dataSource2= new MatTableDataSource(data);
      console.log(data)
    });
  }

  getBiblioteca(){
    this.historiaService.verBiblioteca(Number(sessionStorage.getItem('idUsuario'))).subscribe((data)=>{
      this.dataSource3= new MatTableDataSource(data);
      console.log(data)
    });
  }

  eliminarDeBiblioteca(idHistoria: number){
    this.idUsuario = sessionStorage.getItem('idUsuario');
    const ok = confirm('¿Estás seguro de eliminar la Historia de tu Biblioteca?');
    if(ok){
      this.historiaService.eliminarDeBiblioteca(this.idUsuario,idHistoria).subscribe(()=> {
        console.log(this.idUsuario)
        console.log(idHistoria)

        window.location.reload();
      });
    }
  }


  verHistoria(idHistoria: number){
    this.router.navigate(['user/historias/', Number(sessionStorage.getItem('idUsuario')),'ver', idHistoria]);
  }

}
