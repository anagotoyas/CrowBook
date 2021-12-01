import { Component, OnInit } from '@angular/core';
import { HistoriaService } from '../shared/historia.service';
import { MatTableDataSource } from '@angular/material/table';
import { Historia } from '../shared/historia.model';

@Component({
  selector: 'app-listar-historia',
  templateUrl: './listar-historia.component.html',
  styleUrls: ['./listar-historia.component.css']
})
export class ListarHistoriaComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre','categoria', 'fecha', 'capitulos', 'modificar', 'eliminar'];
  dataSource: MatTableDataSource<Historia>;
  constructor(private historiaService: HistoriaService) { }

  ngOnInit(): void {
    this.getAllHistorias();
  }

    getAllHistorias(){
      this.historiaService.getAllHistorias().subscribe((data)=>{
        this.dataSource = new MatTableDataSource(data);
      });
    }
    applyFilter(value: string){
      this.dataSource.filter = value.trim().toLowerCase();
    }
  
    eliminar(id:number){
  
    }
}
