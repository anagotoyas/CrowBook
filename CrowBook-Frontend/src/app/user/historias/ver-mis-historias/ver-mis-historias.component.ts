import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/usuario';
import { Historia } from '../shared/historia.model';
import { HistoriaService } from '../shared/historia.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ver-mis-historias',
  templateUrl: './ver-mis-historias.component.html',
  styleUrls: ['./ver-mis-historias.component.css']
})
export class VerMisHistoriasComponent implements OnInit {
  usuario =new Usuario();
  public prueba: Array<any> = [];
  
  
  displayedColumns2: string[] = ['id', 'nombre','categoria', 'fecha', 'capitulos', 'modificar', 'eliminar'];
  dataSource2: MatTableDataSource<Historia>;
  constructor(private historiaService: HistoriaService, private route: ActivatedRoute) { }

  
  ngOnInit(): void {
/*
    this.route.paramMap.subscribe((paramMap: any) => {
      
      const { params } = paramMap
      console.log('params : ',paramMap )
      sessionStorage.setItem('a2', params.id);
      console.log(sessionStorage.getItem('a2'));

    })*/

    this.getMisHistorias(sessionStorage.getItem('idUsuario'));
    
    
    
    
    
  }
  
  getMisHistorias(id:any){
    this.historiaService.getMisHistorias(id).subscribe(data => {
      this.dataSource2 = new MatTableDataSource(data);
    })

    /*
    this.historiaService.getMisHistorias(this.usuario).subscribe(data =>{
      console.log(this.usuario)
      console.log(data);
    })
    */
  }
  applyFilter(value: string){
    this.dataSource2.filter = value.trim().toLowerCase();
  }

  deleteHistoria(idHistoria:number){
    console.log(idHistoria)
    const ok = confirm('¿Estás seguro de eliminar la Historia?');
    if(ok){
      this.historiaService.deleteHistoria(idHistoria).subscribe(()=> {
        this.getMisHistorias(idHistoria);
        window.location.reload();
      });
    }
  }

  
 

}

