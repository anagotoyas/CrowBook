import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Capitulo } from '../../capitulos/shared/capitulo.model';
import { CapituloService } from '../../capitulos/shared/capitulo.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-form-capitulo-modificar',
    templateUrl: './form-capitulo-modificar.component.html',
    styleUrls: ['./form-capitulo-modificar.component.css']
  })
  export class FormCapituloModificarComponent implements OnInit {
    form:FormGroup;

    idCapitulo:number;
    idy: string | null;
    fechaPublicacion1: string;
    nombreCapitulo:string;
    descripcionCapitle: string;
    
    displayedColumns: string[] = ['nombreCapitulo', 'descripcionCapitulo'];
   
    dataSource: Capitulo;    
    @Input() capitulo: Capitulo = new Capitulo();
    @Output() onSubmit: EventEmitter<any> = new EventEmitter();

    capitle: Capitulo [];

    constructor(
        private capituloSercive: CapituloService,
        private formBuilder: FormBuilder,
        private router: Router,
        private activeRoute: ActivatedRoute,
      ) {
    this.idy=this.activeRoute.snapshot.paramMap.get('idy')
   
  }
      
      getContenidoCapitulo(){
        this.capitulo = new Capitulo();
        this.capituloSercive.getCapituloPorId(Number(this.idy))
          .subscribe(data => {
            console.log(data)
            this.capitulo = data;
            this.fechaPublicacion1=data['fechaPublicacion']
            sessionStorage.setItem('fechaPublicacion1',this.fechaPublicacion1);
          }, error => console.log(error));
    
      }

      ngOnInit(): void {
        this.getContenidoCapitulo();
        console.log('aa',this.fechaPublicacion1)
        this.form = this.formBuilder.group({
            idCapitulo: [
                this.capitulo.idCapitulo=Number(this.idy), 
                
              ],
            fechaPublicacion:[
                
               this.capitulo.fechaPublicacion=String(sessionStorage.getItem('fechaPublicacion1'))
            ],
            historia:[
                this.capitulo.historia = {idHistoria: 1},//ColocarIdHistoria
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

        })
        
      }
      update(){
        this.onSubmit.emit(this.form.value);
      }

  } 