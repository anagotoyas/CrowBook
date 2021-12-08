import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Resena } from '../../historias/shared/resena.model';
import { ResenaService } from '../../historias/shared/resena.service';

@Component({
  selector: 'app-form-resenas-modificar',
  templateUrl: './form-resenas-modificar.component.html',
  styleUrls: ['./form-resenas-modificar.component.css']
})
export class FormResenasModificarComponent implements OnInit {

  form:FormGroup;

  @Input() resena: Resena = new Resena();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  usuarios=[{idUsuario:sessionStorage.getItem('idUsuario' ) }]
  
  params: any
  id: any
  idx$: any
  user: any
  idz:any;
  

  constructor(
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    public resenaService: ResenaService,
  ) { 
    this.idz=this.activeRoute.snapshot.paramMap.get('idz')
  }
  getInfoResena(){
    this.resena = new Resena();
    this.resenaService.getResenaPorId(Number(this.idz))
      .subscribe(data => {
        console.log(data)
        this.resena = data;
        
      }, error => console.log(error));
    }

  ngOnInit(): void {
    this.getInfoResena();
    this.params = this.activeRoute.parent?.params.subscribe(data => {
      this.id = data['id']
      this.idx$ = data['idx']
      
    })
   

    this.form=this.formBuilder.group({
      idResena: [
        this.resena.idResena=Number(this.idz)
      ],
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

  update(){
    this.onSubmit.emit(this.form.value);
  }

  salir(){
    this.router.navigate(['user/historias/',this.id,'ver', this.idx$]);
  }

}
