import { Component, OnInit } from '@angular/core';
import { HistoriaService } from '../shared/historia.service';
import { MatTableDataSource } from '@angular/material/table';
import { Historia } from '../shared/historia.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-historias-biblioteca',
  templateUrl: './listar-historias-biblioteca.component.html',
  styleUrls: ['./listar-historias-biblioteca.component.css']
})
export class ListarHistoriasBibliotecaComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'usuario','categoria', 'acciones', 'borrar'];
  dataSource: MatTableDataSource<Historia>;
  user: any;
  idUsuario: any;
  constructor(private historiaService: HistoriaService, private route: ActivatedRoute,private router:Router) { }


  verBiblioteca(){
    this.historiaService.verBiblioteca(Number(sessionStorage.getItem('idUsuario'))).subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data);
      console.log('biblioteca',data)
    });
  }
  applyFilter(value: string){
    this.dataSource.filter = value.trim().toLowerCase();
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

  ngOnInit(): void {
    this.verBiblioteca();
    this.route.paramMap.subscribe((paramMap: any) => {

      const { params } = paramMap
      console.log(sessionStorage.getItem('key'))
      console.log('params : ',paramMap )
      sessionStorage.setItem('param', params.id);
    })
  }
}