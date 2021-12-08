import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Historia } from '../shared/historia.model';
import { Resena } from '../shared/resena.model';
import { ResenaService } from '../shared/resena.service';

@Component({
  selector: 'app-modificar-resenas',
  templateUrl: './modificar-resenas.component.html',
  styleUrls: ['./modificar-resenas.component.css']
})
export class ModificarResenasComponent implements OnInit {
  constructor(
    public resenaService: ResenaService,
    private router: Router,
    private activeRoute: ActivatedRoute
    ) { }

    id:any;
    idx$:any;
    idz:any;
    params: any
    historiar: any

  ngOnInit(): void {

    this.params = this.activeRoute.parent?.params.subscribe(data => {
      this.id = data['id']
      this.idx$ = data['idx']
      this.idz=data['idz']
      console.log(this.idz)
    })
    console.log(this.params);
  }
  editResena(resena:Resena){
    this.resenaService.editResena(resena).subscribe(
      ()=>{
        this.router.navigate(['user/historias/',this.id,'ver', this.idx$]);
      },
      (error: any)=> {}
    );
  }

}
