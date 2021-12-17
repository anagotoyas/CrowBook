import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from 'src/app/user/perfiles/shared/usuario.model';
import { RegistrationService } from 'src/app/registration.service';




@Component({
  selector: 'app-form-registar-usuario',
  templateUrl: './form-registar-usuario.component.html',
  styleUrls: ['./form-registar-usuario.component.css']
})
export class FormRegistarUsuarioComponent implements OnInit {
  usuario =new Usuario();
  msg='';
  form:FormGroup;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  constructor(
    public formBuilder: FormBuilder,
    public register: RegistrationService, 
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      
     
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
        this.usuario.cantidadCrowCoins=0,
    ],
    esMiembro: [
      this.usuario.esMiembro=false,
  ],

  })
  }
  registrar(){
    this.msg=""
    
    if(this.form.value.nombreUsuario==null || this.form.value.correo==null|| this.form.value.contrasenaUsuario==null|| this.form.value.descripcionUsuario==null){
      this.msg="Debe llenar todos los campos"

     
    }
    else if(this.form.value.nombreUsuario.length <1 || this.form.value.correo.lenght<1|| this.form.value.contrasenaUsuario.length<1|| this.form.value.descripcionUsuario.length<1){
      this.msg="Debe llenar todos los campos"
    }
    this.onSubmit.emit(this.form.value);
    console.log(this.msg)
    console.log(this.form.value.descripcionUsuario)
  }

}
