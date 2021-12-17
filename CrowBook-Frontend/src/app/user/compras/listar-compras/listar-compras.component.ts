import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Compra } from '../shared/compra.model';
import { CompraService } from '../shared/compra.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../../perfiles/shared/usuario.service';
@Component({
  selector: 'app-listar-compras',
  templateUrl: './listar-compras.component.html',
  styleUrls: ['./listar-compras.component.css']
})
export class ListarComprasComponent implements OnInit {

  dataSource: any;
  
  displayedColumns2: string[] = ['id', 'cantidad','precio','fecha' ];
  dataSource3: MatTableDataSource<Compra>;
  constructor(
    private compraService: CompraService,
    private usuarioService: UsuarioService,
    private router: Router) { }

  
  ngOnInit(): void {

    this.getMisCompras(sessionStorage.getItem('idUsuario'));
    this.getUsuarioPorId();
  }
  
  getMisCompras(id:any){
    this.compraService.getMisCompras(id).subscribe((data: any) => {
      this.dataSource3 = new MatTableDataSource(data);
    })

  }

  getUsuarioPorId(){
    this.usuarioService.getUsuarioPorId(Number(sessionStorage.getItem('idUsuario'))).subscribe((data:any) => {
      this.dataSource = data['body'];

  });
  }

  goCrowShop() {
    this.router.navigate(['user/compras/crowshop']);
  }
  }