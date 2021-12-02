import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {RegistrationService} from '../registration.service';
import { Usuario} from '../usuario';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 usuario =new Usuario();
 msg='';

  constructor(private service:RegistrationService, private router:Router)  { }

  ngOnInit(): void {
    
  }
  loginUser(){
    
  this.service.signIn(this.usuario)
  
  
  .subscribe(
    res=>{
      console.log(res),
      sessionStorage.setItem('key', res);
      console.log(sessionStorage.getItem('key'))
      const { idUsuario } = res
      this.router.navigate([`/user/historias/${idUsuario}`]);
      sessionStorage.setItem('idUsuario', idUsuario)
    },
    err=>{
      console.log(err)
    }
  )
  
   
    }
    
  

}
