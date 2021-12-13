import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compra } from '../shared/compra.model';
import { CompraService } from '../shared/compra.service';

@Component({
  selector: 'app-crear-compra',
  templateUrl: './crear-compra.component.html',
  styleUrls: ['./crear-compra.component.css']
})
export class CrearCompraComponent implements OnInit {

  constructor(
    public compraService: CompraService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createCompra(compra:Compra){
    this.compraService.crearCompra(compra).subscribe(
      ()=>{
        this.router.navigate(['user/compras/listar-compras']);
      },
      (error: any)=> {}
    );
  }

}

