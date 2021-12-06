import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Capitulo } from '../../capitulos/shared/capitulo.model';
import { CapituloService } from '../../capitulos/shared/capitulo.service';

@Component({
    selector: 'app-form-capitulo',
    templateUrl: './form-capitulo.component.html',
    styleUrls: ['./form-capitulo.component.css']
  })
  export class FormCapituloComponent implements OnInit {
    form:FormGroup;
  
    @Input() capitulo: Capitulo = new Capitulo();
    @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  
    constructor(
      private capituloSercive: CapituloService,
      private formBuilder: FormBuilder,
      private router: Router
    ) {}
      
    ngOnInit(): void {
      this.form = this.formBuilder.group({
        
       

        historia:[
          this.capitulo.historia = {idHistoria: 1},//[
            //Validators.required, // = {idHistoria: 1} //Colocar idDeHistoria
          //],
        ],
        nombreCapitulo: [
          this.capitulo.nombreCapitulo,  //Hacer validaciones dependiendo del backend
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(100),
          ],
        ],

        contenidoCapitulo: [
          this.capitulo.contenidoCapitulo,
          [
            Validators.required,
            Validators.maxLength(500),
          ],
        ],
      });
    }
  
    save(){
      this.onSubmit.emit(this.form.value);
    }
  }