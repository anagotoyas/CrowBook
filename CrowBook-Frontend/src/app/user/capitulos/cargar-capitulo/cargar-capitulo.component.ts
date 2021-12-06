import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoriaService } from '../../historias/shared/historia.service';
import { Capitulo } from '../shared/capitulo.model';
import { MatTableDataSource } from '@angular/material/table';
import { CapituloService } from '../../capitulos/shared/capitulo.service';

@Component({
  selector: 'app-cargar-capitulo',
  templateUrl: './cargar-capitulo.component.html',
  styleUrls: ['./cargar-capitulo.component.css']
})

export class CargarCapituloComponent implements OnInit {

  dataSource: Capitulo;
  
  constructor(private historiaService: HistoriaService, private capituloService: CapituloService,private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCap();
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