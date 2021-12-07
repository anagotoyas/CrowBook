import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Capitulo } from '../shared/capitulo.model';
import { CapituloService } from '../shared/capitulo.service';
import { HistoriaService } from '../../historias/shared/historia.service';

@Component({
  selector: 'app-crear-capitulo',
  templateUrl: './crear-capitulo.component.html',
  styleUrls: ['./crear-capitulo.component.css']
})

export class CrearCapituloComponent implements OnInit {

    constructor(public capituloService: CapituloService, private router: Router, private activeRoute: ActivatedRoute) { }
  
    ngOnInit(): void {}
  
    createCapitulo(capitulo:Capitulo){
      this.capituloService.create(capitulo).subscribe(
        ()=>{
          this.router.navigate(['user/capitulos/listar-capitulo']); //TMREEEEEEEEEEEEEEEEEEEEE
        },
        (error: any)=> {}
      );
    }
  }