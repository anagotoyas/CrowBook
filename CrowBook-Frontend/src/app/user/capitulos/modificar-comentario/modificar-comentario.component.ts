import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Capitulo } from '../shared/capitulo.model';
import { Comentario } from '../shared/comentario.model';
import { ComentarioService } from '../shared/comentario.service';

@Component({
    selector: 'app-modificar-comentario',
    templateUrl: './modificar-comentario.component.html',
    styleUrls: ['./modificar-comentario.component.css']
  })
  export class ModificarComentarioComponent implements OnInit {

    constructor(
      public comentarioService: ComentarioService,
      private router: Router,
      private activeRoute: ActivatedRoute
      ) { }
  
      id:any;
      idx$:any;
      params: any
      capitulor: any
  
    ngOnInit(): void {
  
      this.params = this.activeRoute.parent?.params.subscribe(data => {
        this.id = data['id']
        this.idx$ = data['idy'] //Era idx
      })
      console.log(this.params);
    }
    /*createComentario(comentario:Comentario){
  
      this.id = sessionStorage.getItem('idUsuario' );
  
      this.comentarioService.create(comentario).subscribe(
        ()=>{
          console.log(comentario);
          this.capitulor = comentario['capitulo']
  
          this.router.navigate(['user/capitulos/',this.id,'cargar', this.idx$]);
        },
        (error: any)=> {}
      );
    }*/
    editComentario(comentario:Comentario){
      this.comentarioService.editComentario(comentario).subscribe(
        ()=>{
          this.router.navigate(['user/capitulos/',this.id,'cargar', this.idx$]);
        },
        (error: any)=> {}
      );
    }
  
  }