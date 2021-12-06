import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categoria } from '../../historias/shared/categoria.model';
import { CategoriaService } from '../../historias/shared/categoria.service';
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

  categoriasid: Categoria [];

  constructor(
    private historiaService: HistoriaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private categoriaService: CategoriaService
  ) {}
  getAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((data)=>{
      this.categoriasid=data;
    });
  }

    
  ngOnInit(): void {
    this.getAllCategorias();
    this.form = this.formBuilder.group({
      usuario:[
        this.historia.usuario = {idUsuario: sessionStorage.getItem('idUsuario' )}
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
