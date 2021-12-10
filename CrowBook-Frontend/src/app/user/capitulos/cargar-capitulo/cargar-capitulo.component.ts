import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoriaService } from '../../historias/shared/historia.service';
import { Capitulo } from '../shared/capitulo.model';
import { MatTableDataSource } from '@angular/material/table';
import { CapituloService } from '../../capitulos/shared/capitulo.service';
import { Historia } from '../../historias/shared/historia.model';
import { Location } from '@angular/common';
import { Comentario } from '../shared/comentario.model';
import { ComentarioService } from '../shared/comentario.service';


@Component({
  selector: 'app-cargar-capitulo',
  templateUrl: './cargar-capitulo.component.html',
  styleUrls: ['./cargar-capitulo.component.css']
})

export class CargarCapituloComponent implements OnInit {
  @Input() comentario: Comentario = new Comentario();

  dataSource: Capitulo;
  dataSource2: Historia;
  idUsuario:string;
  user: any;//ojo
  idComentario: any;
  listarComentarios: Comentario[];
  idHistoria:any

  
  constructor(
    private historiaService: HistoriaService, 
    private capituloService: CapituloService,
    private activeRoute: ActivatedRoute,
    private comentarioService: ComentarioService,
    private router: Router,
    private _location: Location) { }

  ngOnInit(): void {
    this.getCap();
    const params = this.activeRoute.snapshot.params;
    this.getHisria4Id(params['idx']);
    this.idUsuario = sessionStorage.getItem('idUsuario') || ''
    this.getComentarioPorIdCapitulo();

  }


  usuario(){
    const params = this.activeRoute.snapshot.params;
  }

  getHisria4Id(id : number){
    this.historiaService.getHistoriaPorId(id).subscribe((data: any)=>{
      this.dataSource2 = data['body'];
   //console.log(data);
    })
  }

  getCap(){

    const params = this.activeRoute.snapshot.params;
    if (params['idx']) {//idx♠
      this.capituloService.getCapituloPorId(params['idx']).subscribe((data:any) => {
        this.dataSource = data['body'];
        this.idHistoria= this.dataSource.historia

      });
    }  

  }

  

  retroceder() {
    this.router.navigate(['user/historias/', Number(sessionStorage.getItem('idUsuario')),'ver', this.idHistoria.idHistoria]);
      console.log('historia', this.idHistoria)
  }

  getComentarioPorIdCapitulo(){
    const params = this.activeRoute.snapshot.params;

    this.comentarioService.getCapituloPorIdCapitulo(params['idx']).subscribe((data:any)=>{
      this.listarComentarios=data['body'];

    });
  }

  deleteComentario(idComentario:number){
    console.log(idComentario)
    const ok = confirm('¿Estás seguro de eliminar el Comentario?');
    if(ok){
      this.comentarioService.deleteComentario(idComentario).subscribe(()=> {
        this.getComentarioPorIdCapitulo();
        window.location.reload();
      });
    }
  }

  getInfoComentario(idComentario: any){
    this.comentario = new Comentario();
    this.comentarioService.getComentarioPorId(idComentario)
      .subscribe(data => {
        console.log(data)
        console.log(idComentario);
        this.comentario = data;
        this.idComentario=data['idComentario'];
        
      }, error => console.log(error));
    }


}