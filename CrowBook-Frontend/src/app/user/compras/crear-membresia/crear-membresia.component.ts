import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Membresia } from '../shared/membresia.model';
import { MembresiaService } from '../shared/membresia.service';

@Component({
  selector: 'app-crear-membresia',
  templateUrl: './crear-membresia.component.html',
  styleUrls: ['./crear-membresia.component.css']
})
export class CrearMembresiaComponent implements OnInit {

  constructor(
    public membresiaService: MembresiaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createMembresia(membresia:Membresia){
    this.membresiaService.crearMembresia(membresia).subscribe(() => {
      this.router.navigate(['user/ver-mi-perfil']);
      },
      (error: any)=> {}
    )
  }

}

