import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { Capitulo } from '../../capitulos/shared/capitulo.model';
import { Historia } from '../../historias/shared/historia.model';
import { CapituloService } from '../../capitulos/shared/capitulo.service';
import { HistoriaService } from '../../historias/shared/historia.service';

@Component({
    selector: 'app-form-capitulo',
    templateUrl: './form-capitulo.component.html',
    styleUrls: ['./form-capitulo.component.css']
  })
  export class FormCapituloComponent implements OnInit {
    form:FormGroup;
    dataSource2:Historia;
    idHistoria:any;
    idx:any;
    @Input() capitulo: Capitulo = new Capitulo();
    @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  
    constructor(
      private capituloSercive: CapituloService,
      private formBuilder: FormBuilder,
      private router: Router,
      private acRoute: ActivatedRoute,
      private historiaService: HistoriaService,
    ) {
      this.idx=this.acRoute.snapshot.paramMap.get('idx')
    }
      
    ngOnInit(): void {

        

      const params = this.acRoute.snapshot.params;
      this.getHistoria(params['idx']);
      this.form = this.formBuilder.group({
        
       

        historia:[
          this.capitulo.historia = {idHistoria: params['idx']},//[
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
            Validators.maxLength(10000),
          ],
        ],
      });
    }
  
    getHistoria(id: number){
      this.historiaService.getHistoriaPorId(id).subscribe((data: any)=>{
        //console.log(data);
        this.dataSource2 = data;
        this.idHistoria=this.dataSource2.idHistoria
      })
    }

    save(){
      this.onSubmit.emit(this.form.value);
    }
    retroceder(){
      this.router.navigate(['/user/capitulos/listar-capitulo/', this.idx])
      console.log()
      
    }
    
  }