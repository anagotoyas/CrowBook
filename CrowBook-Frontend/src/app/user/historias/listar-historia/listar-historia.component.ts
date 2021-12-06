import { Component, OnInit } from '@angular/core';
import { HistoriaService } from '../shared/historia.service';
import { MatTableDataSource } from '@angular/material/table';
import { Historia } from '../shared/historia.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-historia',
  templateUrl: './listar-historia.component.html',
  styleUrls: ['./listar-historia.component.css']
})
export class ListarHistoriaComponent implements OnInit {
  
  displayedColumns: string[] = ['nombre', 'usuario','categoria', 'fecha', 'acciones'];
  dataSource: MatTableDataSource<Historia>;
  user: any;
  constructor(private historiaService: HistoriaService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getAllHistorias();
    this.route.paramMap.subscribe((paramMap: any) => {

      const { params } = paramMap
      console.log(sessionStorage.getItem('key'))
      console.log('params : ',paramMap )
      sessionStorage.setItem('param', params.id);
      this.router.navigate([`/user/historias/${sessionStorage.getItem('idUsuario' )}`]);
      
      

    })
   
    

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

