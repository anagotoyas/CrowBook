import { Component, OnInit } from '@angular/core';
import { PaqueteCrowCoin } from '../shared/paquetecrowcoin.model';
import { PaqueteCrowCoinService } from '../shared/paquetecrowcoin.service';

@Component({
  selector: 'app-crowshop',
  templateUrl: './crowshop.component.html',
  styleUrls: ['./crowshop.component.css']
})
export class CrowshopComponent implements OnInit {

  dataSource: PaqueteCrowCoin[];

  constructor(private paqueteService: PaqueteCrowCoinService) { }

  ngOnInit(): void {
    this.getAllPaquetes();
  }

  getAllPaquetes(){
    this.paqueteService.getAllPaqueteCrowCoin().subscribe((data)=>{
      this.dataSource = data;
    });
  }

}