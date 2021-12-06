import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoriaService } from '../shared/historia.service';
import { Historia } from '../shared/historia.model';
import { MatTableDataSource } from '@angular/material/table';
import { CapituloService } from '../../capitulos/shared/capitulo.service';
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

  displayedColumns: string[] = ['id', 'nombre','modificar', 'eliminar'];
  dataSource2: MatTableDataSource<Historia>;

  constructor(private historiaService: HistoriaService, private capituloService: CapituloService,private activeRoute: ActivatedRoute) { }

  //capitulo =new C();
  //public prueba: Array<any> = [];

  ngOnInit(): void {
    this.getInfoHistoria();
  }

  getInfoHistoria(){

    this.capituloService.test();
    const params = this.activeRoute.snapshot.params;
    if (params['idx']) {
      this.historiaService.getHistoriaPorId(params['idx']).subscribe(data => {
        this.dataSource = data;
        this.nombreCategoria = data['categoria'];
        this.user = data['usuario'];
        console.log(data)
      });
      this.capituloService.getAllCapitulos(params['idx']).subscribe((data: any) =>{
        this.dataSource2 = new MatTableDataSource(data);
        console.log(data);
      });      
    }  

  }


}