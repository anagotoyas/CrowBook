import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistoriaService } from '../../historias/shared/historia.service';


@Component({
  selector: 'app-crear-historia',
  templateUrl: './crear-capitulo.component.html',
  styleUrls: ['./crear-capitulo.component.css']
})

export class CrearCapituloComponent implements OnInit {

  constructor(public historiaService: HistoriaService, private router: Router) { }

  ngOnInit(): void {}

  createCapitulo(evt: unknown) {
    console.log('crear capitulo')
  }

  // createHistoria(historia:Historia){
  //   this.historiaService.create(historia).subscribe(
  //     ()=>{
  //       this.router.navigate(['user/historias/ver-mis-historias']);
  //     },
  //     (error: any)=> {}
  //   );
  // }
}
