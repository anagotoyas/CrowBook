import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../../historias/shared/categoria.model';
import { Historia } from '../../historias/shared/historia.model';
import { HistoriaService } from '../../historias/shared/historia.service';
import { CategoriaService } from '../../historias/shared/categoria.service';


@Component({
  selector: 'app-form-modificar',
  templateUrl: './form-modificar.component.html',
  styleUrls: ['./form-modificar.component.css']
})
export class FormModificarComponent implements OnInit {
  form2:FormGroup;
  idHistoria:number;
  idy: string | null;
  fechaPublicacion1: string;
  nombreHistoria:string;
  descripcionHistoria1: string;
  
  displayedColumns: string[] = ['nombreHistoria', 'descripcionHistoria','categoria'];
 
  dataSource: Historia;
  @Input() historia: Historia = new Historia();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  usuarios=[{idUsuario:sessionStorage.getItem('idUsuario' ) }]
  nombreCategoria: any;
  
  categoriasid : Categoria[];
  historia1: Historia [];

  constructor(
    private historiaService: HistoriaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private categoriaService: CategoriaService,
  ) {
    this.idy=this.activeRoute.snapshot.paramMap.get('idy')
   
  }

  getInfoHistoria(){
    this.historia = new Historia();
    this.historiaService.getHistoriaPorId(Number(this.idy))
      .subscribe(data => {
        console.log(data)
        this.historia = data;
        this.fechaPublicacion1=data['fechaPublicacion']
        sessionStorage.setItem('fechaPublicacion1',this.fechaPublicacion1);
        this.nombreCategoria=data['categoria']
      }, error => console.log(error));
         
    
    

  }
  getAllCategorias(){
    this.categoriaService.getAllCategorias().subscribe((data)=>{
      this.categoriasid=data;
    });
  }

  
    
  ngOnInit(): void {
  
  this.getAllCategorias();
   this.getInfoHistoria();
    console.log('aa',this.fechaPublicacion1)
    this.form2 = this.formBuilder.group({
      idHistoria: [
        this.historia.idHistoria=Number(this.idy),
       
        
      ],
      fechaPublicacion:[
        
        this.historia.fechaPublicacion=String(sessionStorage.getItem('fechaPublicacion1'))
        //console.log(this.historia.fechaPublicacion)
        //this.historia.fechaPublicacion=String(sessionStorage.getItem('fechaPublicacion'))
      ],
     
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

  update(){
    this.onSubmit.emit(this.form2.value);

  }
}
