import { Component, OnInit } from '@angular/core';
import { DonacionService } from '../historias/shared/donacion.service';
import { MatTableDataSource } from '@angular/material/table';
import { Donacion } from '../historias/shared/donacion.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';




@Component({
  selector: 'app-listar-donaciones',
  templateUrl: './listar-donaciones.component.html',
  styleUrls: ['./listar-donaciones.component.css']
})
export class ListarDonacionesComponent implements OnInit {
  displayedColumns2: string[] = ['ID', 'Receptor', 'Cantidad_Donación',  'Fecha'];
  dataSource: MatTableDataSource<Donacion>;
  user: any;

  constructor(private donacionService: DonacionService, private route: ActivatedRoute,private router:Router, private _location: Location) { }
  
  ngOnInit(): void {

    const params = this.route.snapshot.params;
    this.user = (params['idu']);
    this.getAllMyDonations(this.user);

  }

  getAllMyDonations(id: number){
    this.donacionService.getAllMyDonations(id).subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource(data['body']);
      console.log(this.dataSource);
    });
  }

  applyFilter(value: string){
    this.dataSource.filter = value.trim().toLowerCase();
  }


}

