import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Historia } from '../shared/historia.model';
import { HistoriaService } from '../shared/historia.service';


@Component({
  selector: 'app-crear-historia',
  templateUrl: './crear-historia.component.html',
  styleUrls: ['./crear-historia.component.css']
})

export class CrearHistoriaComponent implements OnInit {

  constructor(public historiaService: HistoriaService, private router: Router) { }

  ngOnInit(): void {}

  createHistoria(historia:Historia){
    this.historiaService.create(historia).subscribe(
      ()=>{
        this.router.navigate(['user/historias/ver-mis-historias']);
      },
      (error: any)=> {}
    );
  }
}
