import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Resena } from '../../historias/shared/resena.model';
import { ResenaService } from '../../historias/shared/resena.service';

@Component({
  selector: 'app-form-resena',
  templateUrl: './form-resena.component.html',
  styleUrls: ['./form-resena.component.css']
})
export class FormResenaComponent implements OnInit {
  form:FormGroup;

  @Input() resena: Resena = new Resena();
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
      this.idx$ = data['idx']
      
    })
    

    this.form=this.formBuilder.group({
      usuario:[
        this.resena.usuario = {idUsuario: sessionStorage.getItem('idUsuario' )}
        
      ],
      historia:[
        this.resena.historia = {idHistoria: this.idx$}
      ],
      comentarioResena: [
        this.resena.comentarioResena,
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
    this.router.navigate(['user/historias/',this.id,'ver', this.idx$]);
  }

}
