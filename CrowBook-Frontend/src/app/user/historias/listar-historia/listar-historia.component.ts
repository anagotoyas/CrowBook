import { Component, OnInit, EventEmitter } from '@angular/core';
import { HistoriaService } from '../shared/historia.service';
import { MatTableDataSource } from '@angular/material/table';
import { Historia } from '../shared/historia.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../../historias/shared/categoria.model';
import { CategoriaService } from '../../historias/shared/categoria.service';

@Component({
  selector: 'app-listar-historia',
  templateUrl: './listar-historia.component.html',
  styleUrls: ['./listar-historia.component.css']
})
export class ListarHistoriaComponent implements OnInit {
  //
  onSubmit: EventEmitter<any> = new EventEmitter();
  //
  
  displayedColumns: string[] = ['nombre', 'usuario','categoria',  'acciones'];
  dataSource: MatTableDataSource<Historia>;
  user: any;
  categoriasid: Categoria [];
  constructor(private historiaService: HistoriaService, private route: ActivatedRoute,private router:Router,private categoriaService: CategoriaService) {}
  getAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((data)=>{
      this.categoriasid=data;
    });
  }

  ngOnInit(): void {
    this.getAllCategorias();
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
      this.historiaService.getAllHistorias().subscribe((data:any)=>{
        this.dataSource = new MatTableDataSource(data['body']);
      });
    }
    applyFilter(value: string){
      this.dataSource.filter = value.trim().toLowerCase();
    }
  
    eliminar(id:number){
  
    }

}
