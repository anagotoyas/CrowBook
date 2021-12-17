import { Historia } from '../historia.model';
import { Usuario } from 'src/app/user/perfiles/shared/usuario.model';
import { HistoriaService } from '../historia.service';
import { UsuarioService } from 'src/app/user/perfiles/shared/usuario.service';
import { Donacion } from '../donacion.model';
import { DonacionService } from '../donacion.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit, Inject, EventEmitter, Output, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  form:FormGroup;  
//Jampier
  @Input() donacion: Donacion = new Donacion();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  //HISTORIA
  dataSource: Historia;
  nombreCategoria: any;
  user: any;
  //HISTORIA
  Receptor: any;
  idReceptor: any
  cantidadCoins: any;

//Jampier x2
  public DonarForm: FormGroup;
  wasFormChanged = false;

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    //Jampier
    public dialog: MatDialog,
    private usuarioService: UsuarioService,
    private donacionService: DonacionService,
    private historiaService: HistoriaService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    //Jampier x2
    ){ }

  ngOnInit(): void {//:id

    this.idReceptor = this.data;
   this.getCantidadCoins(Number(sessionStorage.getItem('idUsuario')));
   console.log(this.getCantidadCoins(Number(sessionStorage.getItem('idUsuario'))))

    this.DonarForm = this.formBuilder.group({
      emisor:[
        this.donacion.emisor = {idUsuario: sessionStorage.getItem('idUsuario')}
      ],
      receptor: [
        this.donacion.receptor = {idUsuario: this.idReceptor}
      ],
      cantidadCoinsDonacion: [
        this.donacion.cantidadCoinsDonacion,
        [
          Validators.required,
          Validators.min(1),
          //Validators.max(500),
          Validators.max(this.cantidadCoins),
        ]
      ]
    })
    
  }

  getCantidadCoins(idUsuario: number){
    this.usuarioService.getCantidadCrowCoins(idUsuario).subscribe((data:any) => {
      console.log(data);
      //this.id4MODAL = data['body'],
      //console.log(params['idx']),
      //console.log(this.id4MODAL)
      this.cantidadCoins =  data['body']
      console.log(this.cantidadCoins)
    });
  }

  getHistoria(){
    const params = this.activeRoute.snapshot.params;
    if (params['idx']) {
      this.historiaService.getHistoriaPorId(params['idx']).subscribe((data:any) => {
        this.dataSource = data['body'];
        this.nombreCategoria = this.dataSource.categoria;
        this.user = this.dataSource.usuario;
        console.log(data);
      }); 
    }  
  }

  openModal(): void{
    const dialogRef = this.dialog.open(ModalComponent, {});
    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
    });
  }

closeModal() {
    this.dialogRef.close();
}

    save(){
      console.log(this.donacion);
      console.log(this.DonarForm.value);
      this.onSubmit.emit(this.DonarForm.value);
      this.donarCrowcoins(this.donacion);

    }
    
    //DONAR_CROWCOINS
    donarCrowcoins(donacion: Donacion){
      const params = this.activeRoute.snapshot.params;
      this.donacionService.donarCrowcoins(donacion).subscribe(
        ()=>{
          this.closeModal();
        },
        (error: any)=> {}
      )
    }
  
    
}
