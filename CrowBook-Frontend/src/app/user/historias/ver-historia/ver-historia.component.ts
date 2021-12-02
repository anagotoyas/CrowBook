import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoriaService } from '../shared/historia.service';
import { Historia } from '../shared/historia.model';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-ver-historia',
  templateUrl: './ver-historia.component.html',
  styleUrls: ['./ver-historia.component.css']
})
export class VerHistoriaComponent implements OnInit {

  dataSource: Historia;
  nombreCategoria: any;
  capitulo: any;
  user: any;

  constructor(private historiaService: HistoriaService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getInfoHistoria();
  }

  getInfoHistoria(){

    const params = this.activeRoute.snapshot.params;
    if (params['idx']) {
      this.historiaService.getHistoriaPorId(params['idx']).subscribe(data => {
        this.dataSource = data;
        this.nombreCategoria = data['categoria'];
        this.user = data['usuario'];
        console.log(data)
      });      
    }
    

  }




}
