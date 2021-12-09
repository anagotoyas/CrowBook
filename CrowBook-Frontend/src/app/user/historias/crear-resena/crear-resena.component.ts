import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Historia } from '../shared/historia.model';
import { Resena } from '../shared/resena.model';
import { ResenaService } from '../shared/resena.service';

@Component({
  selector: 'app-crear-resena',
  templateUrl: './crear-resena.component.html',
  styleUrls: ['./crear-resena.component.css']
})
export class CrearResenaComponent implements OnInit {

  constructor(
    public resenaService: ResenaService,
    private router: Router,
    private activeRoute: ActivatedRoute
    ) { }

    id:any;
    idx$:any;
    params: any
    historiar: any

  ngOnInit(): void {

    this.params = this.activeRoute.parent?.params.subscribe(data => {
      this.id = data['id']
      this.idx$ = data['idx']
    })
    console.log(this.params);
  }
  createResena(resena:Resena){

    this.id = sessionStorage.getItem('idUsuario' );

    this.resenaService.create(resena).subscribe(
      ()=>{
        console.log(resena);
        this.historiar = resena['historia']

        this.router.navigate(['user/historias/',this.id,'ver', this.idx$]);
      },
      (error: any)=> {}
    );
  }

}