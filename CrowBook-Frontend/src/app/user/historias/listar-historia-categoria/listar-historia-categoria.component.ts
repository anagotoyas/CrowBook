import { Component, OnInit, EventEmitter } from '@angular/core';
import { HistoriaService } from '../shared/historia.service';
import { MatTableDataSource } from '@angular/material/table';
import { Historia } from '../shared/historia.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../../historias/shared/categoria.model';
import { CategoriaService } from '../../historias/shared/categoria.service';
import { CloseScrollStrategy } from '@angular/cdk/overlay';

@Component({
  selector: 'app-listar-historia-categoria',
  templateUrl: './listar-historia-categoria.component.html',
  styleUrls: ['./listar-historia-categoria.component.css']
})
export class ListarHistoriaCategoriaComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'usuario','categoria',  'acciones'];
  dataSource: MatTableDataSource<Historia>;
  user: any;
  categoriasid: Categoria [];
  categoria: Categoria;
  id_categoria: any;

  constructor(private historiaService: HistoriaService, private route: ActivatedRoute,private router:Router,private categoriaService: CategoriaService) {}


  ngOnInit(): void {
    
    const params = this.route.snapshot.params;
    console.log('a');
    console.log(params['idc']);
    this.id_categoria = (params['idc']);
    this.getHistorias4Categoria(this.id_categoria);
    this.getAllCategorias();
    this.getCategoriaPorId();
    this.route.paramMap.subscribe((paramMap: any) => {

      const { params } = paramMap
      console.log(sessionStorage.getItem('key'))
      console.log('params : ',paramMap )
      sessionStorage.setItem('param', params.id);
      this.router.navigate([`/user/historias/${sessionStorage.getItem('idUsuario' )}/listar-historia-categoria/${params['idc']}`]);
      
      

    })
   
    

  }

  getAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((data)=>{
      this.categoriasid=data;
    });
  }

  getCategoriaPorId(){
    const params = this.route.snapshot.params;
    //console.log(params['idc']);
    this.categoriaService.getCategoriaPorId((params['idc'])).subscribe((data:any)=>{
      this.categoria=data;
      console.log(this.categoria.nombreCategoria);
    });
  }

    getAllHistorias(){
      this.historiaService.getAllHistorias().subscribe((data:any)=>{
        this.dataSource = new MatTableDataSource(data['body']);
      });
    }

    getHistorias4Categoria(idCategoria: number){
      this.historiaService.getHistoriaPorIdCategoria(idCategoria).subscribe((data:any)=>{
        this.dataSource = new MatTableDataSource(data['body']);
        console.log(this.dataSource);
      });
    }

    applyFilter(value: string){
      this.dataSource.filter = value.trim().toLowerCase();
    }
  
    eliminar(id:number){
  
    }

}

