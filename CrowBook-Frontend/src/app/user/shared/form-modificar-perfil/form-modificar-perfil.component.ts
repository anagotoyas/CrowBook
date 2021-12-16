import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../../perfiles/shared/usuario.model';
import { UsuarioService } from '../../perfiles/shared/usuario.service';

@Component({
  selector: 'app-form-modificar-perfil',
  templateUrl: './form-modificar-perfil.component.html',
  styleUrls: ['./form-modificar-perfil.component.css']
})
export class FormModificarPerfilComponent implements OnInit {
  form:FormGroup;
  dataSource: Usuario;
  coinas: any
  @Input() usuario: Usuario = new Usuario();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private usuarioService: UsuarioService
  ) { 
    
  }

  ngOnInit(): void {
    this.getUsuarioPorId();
    
    this.form = this.formBuilder.group({
      idUsuario: [
        this.usuario.idUsuario= Number(sessionStorage.getItem('idUsuario'))
        
    ],
     
      nombreUsuario: [
          this.usuario.nombreUsuario, 
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(25),
          ],
      ],

      correo: [
          this.usuario.correo,
          [
            Validators.required,
            Validators.email
          ],
      ],
      
      contrasenaUsuario: [
        this.usuario.contrasenaUsuario,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(25),
        ],
      ],
      descripcionUsuario: [
        this.usuario.descripcionUsuario,
        [
          Validators.required,
          Validators.maxLength(100),
        ],
      ],
      
      cantidadCrowCoins: [
        this.usuario.cantidadCrowCoins=this.usuario.cantidadCrowCoins,
       
    ],
    esMiembro: [
      this.usuario.esMiembro=this.usuario.esMiembro,
  ],

  })
  }
  getUsuarioPorId(){
     
    this.usuario=new Usuario();
    this.usuarioService.getUsuarioPorId(Number(sessionStorage.getItem('idUsuario'))).subscribe((data:any) => {
     
      this.usuario= data['body'];
    
      
    });
  }
  update(){
    this.onSubmit.emit(this.form.value);
  }
  

}
