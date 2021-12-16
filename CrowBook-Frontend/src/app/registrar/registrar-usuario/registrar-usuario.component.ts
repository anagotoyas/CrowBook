import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { Usuario } from 'src/app/user/perfiles/shared/usuario.model';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  form:FormGroup;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    public register: RegistrationService, 
    public router: Router,
  ) { }

  ngOnInit(): void {
    
  }
  registerUser(usuario: Usuario){
    
    
    
    
    this.register.register(usuario).subscribe(
      (res:any)=>{
        
        const { idUsuario } = res['body']
      this.router.navigate([`/user/historias/${idUsuario}`]);
      sessionStorage.setItem('idUsuario', idUsuario)
      },
      (error: any)=> {}
    );
    

  }

}
