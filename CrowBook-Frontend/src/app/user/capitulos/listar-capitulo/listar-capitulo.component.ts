import { Component, OnInit } from '@angular/core';
import { CapituloService } from '../shared/capitulo.service';
import { HistoriaService } from '../../historias/shared/historia.service'
import { MatTableDataSource } from '@angular/material/table';
import { Capitulo } from '../shared/capitulo.model';
import { Historia } from '../../historias/shared/historia.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-listar-capitulo',
    templateUrl: './listar-capitulo.component.html',
    styleUrls: ['./listar-capitulo.component.css']
  })
  export class ListarCapituloComponent implements OnInit {
    
    displayedColumns2: string[] = ['id', 'nombre', 'fecha', 'modificar', 'eliminar'];
    dataSource: MatTableDataSource<Capitulo>;
    dataSource3: Historia;
    user: any;
    constructor(
      private capituloService: CapituloService,
       private route: ActivatedRoute,
        private historiaService: HistoriaService ,
        private router:Router,
        private _location: Location) { }
  

    ngOnInit(): void {
  
      const params = this.route.snapshot.params;
      this.getHisria4Id(params['idx']);
      this.getAllCapitulos(params['idx']);
      this.route.paramMap.subscribe((paramMap: any) => {
  
        const { params } = paramMap
        console.log(sessionStorage.getItem('key'))
        console.log('params : ',paramMap )
        sessionStorage.setItem('param', params.id);       
  
      })  
  
    }

      getHisria4Id(id : number){
        this.historiaService.getHistoriaPorId(id).subscribe((data: any)=>{
          this.dataSource3 = data;
       //console.log(data);
        })
      }
  
      getAllCapitulos(id:number){
        this.capituloService.getAllCapitulos(id).subscribe((data)=>{
          this.dataSource = new MatTableDataSource(data);
          //  console.log(data);
        });
      }
      applyFilter(value: string){
        this.dataSource.filter = value.trim().toLowerCase();
      }
    
      eliminar(id:number){
        const ok = confirm('¿Estás seguro de eliminar el capitulo?*');
        if (ok) {
            this.capituloService.delete(id).subscribe(() =>{ 
            this.getAllCapitulos(id);
            window.location.reload();
            })
        }  
       }
       backClicked() {
        this._location.back();
      }

  }