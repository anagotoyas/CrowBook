import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Membresia } from '../../compras/shared/membresia.model';
import { MembresiaService } from '../../compras/shared/membresia.service';
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
  membresia: any;
  mem: Membresia;
  isShown: boolean = false;
  isShown2: boolean = false;


  constructor(
    private usuarioService: UsuarioService,
    private historiaService: HistoriaService,
    private router: Router,
    private membresiaService: MembresiaService,

  ) { }

  ngOnInit(): void {
    this.getUsuarioPorId();
    this.getFavoritos();
    this.getBiblioteca();
  }

  getUsuarioPorId(){
    this.usuarioService.getUsuarioPorId(Number(sessionStorage.getItem('idUsuario'))).subscribe((data:any) => {
      this.dataSource = data['body'];

      if (this.dataSource.esMiembro == true){
        this.membresiaService.getMembresiaDeUsuario(Number(sessionStorage.getItem('idUsuario'))).subscribe((data) => {
          this.mem = data;
          this.membresia = "Miembro desde "+ data.fechaCompra;
          this.isShown =! this.isShown;
        });
      }
      
      if (this.dataSource.esMiembro == false) {
        this.membresiaService.getMembresiaDeUsuario(Number(sessionStorage.getItem('idUsuario'))).subscribe((data2) => {
          if(data2){
            this.mem = data2;
          this.isShown2 =! this.isShown2;
          }
          
        });
      }

    });
  }

  getFavoritos(){
    this.historiaService.verFavoritos(Number(sessionStorage.getItem('idUsuario'))).subscribe((data)=>{
      this.dataSource2= new MatTableDataSource(data);
      console.log(data)

    });
  }

  eliminarDeFavorito(idHistoria: number){
    this.idUsuario = sessionStorage.getItem('idUsuario');
    const ok = confirm('¿Estás seguro de eliminar la Historia de tus Favoritos?');
    if(ok){
      this.historiaService.eliminarDeFavorito(this.idUsuario,idHistoria).subscribe(()=> {
        console.log(this.idUsuario)
        console.log(idHistoria)

        window.location.reload();
      });
    }

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
  eliminarCuenta(id: number){
    console.log(id)
    const ok = confirm('¿Estás seguro de eliminar tu cuenta?');
    if(ok){
      this.usuarioService.delete(id).subscribe(()=> {
       
        this.router.navigate([''])
      });
    }
  }

  cancelarMembresia() {

    const ok = confirm('¿Estás seguro de cancelar tu membresia?');
    if(ok) {
      this.membresiaService.cancelarMembresia(this.mem).subscribe((data2:any) => {
        this.mem = data2;
        window.location.reload();
      });
      
    }
    
  }

  renovarMembresia(){
    const ok = confirm('¿Estás seguro de renovar tu membresia?');
    if(ok) {
      this.membresiaService.renovarMembresia(this.mem).subscribe((data3:any) => {
        this.mem = data3;
        window.location.reload();
      });
      
    }
  }

}
