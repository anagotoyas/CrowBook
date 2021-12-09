import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from '../../capitulos/shared/comentario.model';
import { ComentarioService } from '../../capitulos/shared/comentario.service';

@Component({
    selector: 'app-form-comentario',
    templateUrl: './form-comentario.component.html',
    styleUrls: ['./form-comentario.component.css']
})

export class FormComentarioComponent implements OnInit {
    form:FormGroup;

  @Input() comentario: Comentario = new Comentario();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  usuarios=[{idUsuario:sessionStorage.getItem('idUsuario' ) }]

  params: any
  id: any
  idx$: any
  user: any

  constructor(
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.params = this.activeRoute.parent?.params.subscribe(data => {
      this.id = data['id']
      this.idx$ = data['idy'] //era idx
      
    })

    this.form=this.formBuilder.group({
        usuario:[
          this.comentario.usuario = {idUsuario: sessionStorage.getItem('idUsuario' )}
          
        ],
        capitulo:[
          this.comentario.capitulo = {idCapitulo: this.idx$}
        ],
        comentarioCapitulo: [
          this.comentario.comentarioComentario,
          [
            Validators.required,
            Validators.minLength(7),
            Validators.maxLength(500),
          ]
        ],
      });
    }

    save(){
      this.onSubmit.emit(this.form.value);
    }
  
    salir(){
      this.router.navigate(['user/capitulos/',this.id,'cargar', this.idx$]);
    }
  
  
  

}