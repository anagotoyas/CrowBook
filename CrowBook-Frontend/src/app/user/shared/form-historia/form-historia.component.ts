import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Historia } from '../../historias/shared/historia.model';
import { HistoriaService } from '../../historias/shared/historia.service';



@Component({
  selector: 'app-form-historia',
  templateUrl: './form-historia.component.html',
  styleUrls: ['./form-historia.component.css']
})
export class FormHistoriaComponent implements OnInit {
  form:FormGroup;

  @Input() historia: Historia = new Historia();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  usuarios=[{idUsuario:sessionStorage.getItem('idUsuario' ) }]

  categoriasid = [
    {idCategoria: 1, nombreCategoria: "Drama"},
    {idCategoria: 2, nombreCategoria: "Terror"},
    {idCategoria: 3, nombreCategoria: "Suspenso"},
  ];

  constructor(
    private historiaService: HistoriaService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
    
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      usuario:[
        this.historia.usuario = {idUsuario: 1}
      ],
      nombreHistoria: [
        this.historia.nombreHistoria, 
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100),
        ],
      ],
      descripcionHistoria: [
        this.historia.descripcionHistoria,
        [
          Validators.required,
          Validators.maxLength(500),
        ],
      ],
      categoria: [
        this.historia.categoria,
        [
          Validators.required,
        ],
      ],
      imagenPortada: [
        this.historia.imagenPortada = "imagendefecto.png"
      ],
    });
  }

  save(){
    this.onSubmit.emit(this.form.value);
  }
}
