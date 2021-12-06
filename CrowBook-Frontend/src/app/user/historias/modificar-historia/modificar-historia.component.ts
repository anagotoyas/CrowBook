import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoriaService } from '../shared/historia.service';
import { Historia } from '../shared/historia.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-modificar-historia',
  templateUrl: './modificar-historia.component.html',
  styleUrls: ['./modificar-historia.component.css']
})
export class ModificarHistoriaComponent implements OnInit {
  dataSource: Historia;
  fechaPublicacion:any
  constructor(private historiaService: HistoriaService, private activeRoute: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.getInfoHistoria();
  }

  getInfoHistoria(){

    const params = this.activeRoute.snapshot.params;
    if (params['idy']) {
      this.historiaService.getHistoriaPorId(params['idy']).subscribe(data => {
        this.dataSource = data;
        this.fechaPublicacion=data['fechaPublicacion'];
        sessionStorage.setItem('fechaPublicacion',data.fechaPublicacion);
        

        console.log(data)
      });      
    }
  }

  editHistoria(historia:Historia){
    this.historiaService.edit(historia).subscribe(
      ()=>{
        this.router.navigate(['user/historias/ver-mis-historias']);
      },
      (error: any)=> {}
    );
  }
  
}