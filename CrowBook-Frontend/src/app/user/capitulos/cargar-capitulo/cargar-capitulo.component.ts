import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoriaService } from '../../historias/shared/historia.service';
import { Capitulo } from '../shared/capitulo.model';
import { MatTableDataSource } from '@angular/material/table';
import { CapituloService } from '../../capitulos/shared/capitulo.service';
import { Historia } from '../../historias/shared/historia.model';

@Component({
  selector: 'app-cargar-capitulo',
  templateUrl: './cargar-capitulo.component.html',
  styleUrls: ['./cargar-capitulo.component.css']
})

export class CargarCapituloComponent implements OnInit {

  dataSource: Capitulo;
  dataSource2: Historia;
  idUsuario:string;
  idHistoria:string;
  
  constructor(private historiaService: HistoriaService, private capituloService: CapituloService,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCap();
    const params = this.activeRoute.snapshot.params;
    this.getHisria4Id(params['idx']);
    this.idUsuario = sessionStorage.getItem('idUsuario') || ''

  }

  usuario(){
    const params = this.activeRoute.snapshot.params;
  }

  /*this.getMisHistorias(sessionStorage.getItem('idUsuario')); }
  */

  getHisria4Id(id : number){
    this.historiaService.getHistoriaPorId(id).subscribe((data: any)=>{
      this.dataSource2 = data;
   //console.log(data);
    })
  }

  getCap(){

    const params = this.activeRoute.snapshot.params;
    if (params['idx']) {
      this.capituloService.getCapituloPorId(params['idx']).subscribe(data => {
        this.dataSource = data;
        console.log(data)
      });
    }  

  }


}