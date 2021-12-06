import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoriaService } from '../shared/historia.service';
import { Historia, Capitulo } from '../shared/historia.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ver-historia',
  templateUrl: './ver-historia.component.html',
  styleUrls: ['./ver-historia.component.css'],
})
export class VerHistoriaComponent implements OnInit {
  dataSource: Historia;
  capitulos: Capitulo[];
  capitulosRaw: string;
  displayedColumns: string[] = ['id', 'nombre', 'visualizar'];
  nombreCategoria: any;
  capitulo: any;
  user: any;
  historiaId: string;

  constructor(
    private historiaService: HistoriaService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getInfoHistoria();
  }

  getInfoHistoria() {
    const params = this.activeRoute.snapshot.params;
    if (params['idx']) {
      this.historiaId = params['idx']
      this.historiaService.getHistoriaPorId(params['idx']).subscribe((data) => {
        this.dataSource = data;
        this.nombreCategoria = data['categoria'];
        this.user = data['usuario'];
        console.log(data);
      });

      this.historiaService
        .getCapitulosPorHistoria(params['idx'])
        .subscribe((data) => {
          this.capitulos = data  
          this.capitulosRaw = JSON.stringify(data, null, 2)
        });
    }
  }

  agregarCapitulo() {
    console.log('hola')
  }
}
