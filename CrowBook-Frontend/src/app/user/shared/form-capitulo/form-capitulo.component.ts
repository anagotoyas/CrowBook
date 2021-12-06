import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Capitulo } from '../../historias/shared/capitulo.model';
import { Historia } from '../../historias/shared/historia.model';
import { HistoriaService } from '../../historias/shared/historia.service';



@Component({
  selector: 'app-form-capitulo',
  templateUrl: './form-capitulo.component.html',
  styleUrls: ['./form-capitulo.component.css']
})
export class FormCapituloComponent implements OnInit {
  form:FormGroup;

  @Input() capitulo: Capitulo = new Capitulo();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  usuarios=[{idUsuario:sessionStorage.getItem('idUsuario' ) }]

  constructor(
    private historiaService: HistoriaService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
    
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id:[
        this.capitulo.historia = {idUsuario:sessionStorage.getItem('idUsuario' ) }
      ],
      nombreCapitulo: [
        this.capitulo.nombreCapitulo, 
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
