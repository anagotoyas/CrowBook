import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/usuario';
import { Compra } from '../shared/compra.model';
import { CompraService } from '../shared/compra.service';
import { PaqueteCrowCoin } from '../shared/paquetecrowcoin.model';
import { PaqueteCrowCoinService } from '../shared/paquetecrowcoin.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-listar-compras',
  templateUrl: './listar-compras.component.html',
  styleUrls: ['./listar-compras.component.css']
})
export class ListarComprasComponent implements OnInit {
  usuario =new Usuario();
  public prueba: Array<any> = [];
  paquete: any;
  
  displayedColumns2: string[] = ['id', 'cantidad','precio','fecha' ];
  dataSource3: MatTableDataSource<Compra>;
  constructor(private compraService: CompraService, private paquetecrowcoinService: PaqueteCrowCoinService, private route: ActivatedRoute) { }

  
  ngOnInit(): void {

    this.getMisCompras(sessionStorage.getItem('idUsuario'));
  
      
  }
  
  getMisCompras(id:any){
    this.compraService.getMisCompras(id).subscribe((data: any) => {
      this.dataSource3 = new MatTableDataSource(data);
      console.log(data);
    })

  }
  getMisPaquetes(id:any){
    this.paquetecrowcoinService.getAllPaqueteCrowCoin().subscribe((data:any) => {
      this.dataSource3 = new MatTableDataSource(data);
    })

  }
  applyFilter(value: string){
    this.dataSource3.filter = value.trim().toLowerCase();
  }

}
