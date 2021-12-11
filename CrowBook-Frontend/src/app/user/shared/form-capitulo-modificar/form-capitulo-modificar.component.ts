import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Capitulo } from '../../capitulos/shared/capitulo.model';
import { Historia } from '../../historias/shared/historia.model';
import { CapituloService } from '../../capitulos/shared/capitulo.service';
import { HistoriaService } from '../../historias/shared/historia.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'app-form-capitulo-modificar',
    templateUrl: './form-capitulo-modificar.component.html',
    styleUrls: ['./form-capitulo-modificar.component.css'],
  })
  export class FormCapituloModificarComponent implements OnInit {
    form:FormGroup;
    dataSource2:Historia;
    idCapitulo:number;
    idy: string | null;
    
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
        private historiaService: HistoriaService,
      ) {
    this.idy=this.activeRoute.snapshot.paramMap.get('idy')
   
  }
      
      getContenidoCapitulo(){
        this.capitulo = new Capitulo();
        this.capituloSercive.getCapituloPorId(Number(this.idy))
          .subscribe((data:any) => {
            //console.log(data)
            this.capitulo = data['body'];
            
           
          }, error => console.log(error));
    
      }

      getHistoria(id: number){
        this.historiaService.getHistoriaPorId(id).subscribe((data: any)=>{
          //console.log(data);
          this.dataSource2 = data['body'];
        })
      }

      ngOnInit(): void {

        const params = this.activeRoute.snapshot.params;
        this.getHistoria(params['idx']);
        this.getContenidoCapitulo();
        //console.log('aa',this.fechaPublicacion1) NO CREO
        this.form = this.formBuilder.group({
            idCapitulo: [
                this.capitulo.idCapitulo=Number(this.idy), 
                
              ],
           
            historia:[
                this.capitulo.historia = {idHistoria: params['idx']},//POR ALGUNA RAZON QUE YA NO ME ACUERDO ESTABA CON EL VALOR ESTATICO 1
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
                  Validators.maxLength(10000),
                ],
            ],

        })
        
      }
      update(){
        this.onSubmit.emit(this.form.value);
      }

  } 