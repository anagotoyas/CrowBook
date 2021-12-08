import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Capitulo } from '../shared/capitulo.model';
import { CapituloService } from '../shared/capitulo.service';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { HistoriaService } from '../../historias/shared/historia.service';

@Component({
  selector: 'app-modificar-capitulo',
  templateUrl: './modificar-capitulo.component.html',
  styleUrls: ['./modificar-capitulo.component.css']
})

export class ModificarCapituloComponent implements OnInit {

    displayedColumns2: string[] = ['id', 'nombre'];
    dataSource: Capitulo;
    fechaPublicacion:any
    user: any;

    constructor(private capituloService: CapituloService, private router: Router, private activeRoute: ActivatedRoute, private historiaService: HistoriaService) { }
  
    ngOnInit(): void {this.getCapitulo4Id();}
  
    

    modifyCapitulo(capitulo:Capitulo){
      const params = this.activeRoute.snapshot.params;
      this.capituloService.modify(capitulo).subscribe(
        ()=>{
          this.router.navigate(['user/capitulos/listar-capitulo/',params['idx']]); 
        },
        (error: any)=> {}
      );
    }

    /*getCapitulo4Id(id:any){

      const parameter = this.activeRoute.snapshot.params;
      if (parameter[id]){
        this.capituloService.getCapituloPorId(parameter[id]).subscribe(data =>{
          this.dataSource = data;
          console.log(data)
        });
      }

    }*/
    getCapitulo4Id(){

      const parameter = this.activeRoute.snapshot.params;
      if (parameter['idy']){
        this.capituloService.getCapituloPorId(parameter['idy']).subscribe(data =>{
          this.dataSource = data;
          this.fechaPublicacion=data['fechaPublicacion'];
          sessionStorage.setItem('fechaPublicacion',data.fechaPublicacion);

          console.log(data)
        });
      }

    }
  }
  /*getInfoHistoria(){

    const params = this.activeRoute.snapshot.params;
    if (params['idy']) {
      this.historiaService.getHistoriaPorId(params['idy']).subscribe(data => {
        this.dataSource = data;
        this.fechaPublicacion=data['fechaPublicacion'];
        sessionStorage.setItem('fechaPublicacion',data.fechaPublicacion);
        

        console.log(data)
      });      
    }
  } */

  