import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Compra } from '../../compras/shared/compra.model';
import { PaqueteCrowCoinService } from '../../compras/shared/paquetecrowcoin.service';

@Component({
  selector: 'app-form-compra',
  templateUrl: './form-compra.component.html',
  styleUrls: ['./form-compra.component.css']
})
export class FormCompraComponent implements OnInit {

  form:FormGroup;
  idPaqueteCrow: any;

  @Input() compra: Compra = new Compra();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private paqueteService: PaqueteCrowCoinService
    ) { }

  ngOnInit(): void {
    const params = this.activeRoute.snapshot.params;
    this.getPaquete();
    this.form = this.formBuilder.group({
      usuario: [
        this.compra.usuario = {idUsuario: sessionStorage.getItem('idUsuario' )}
      ],
      paqueteComprado: [
        this.compra.paqueteComprado = {idPaquete: params['idp']}
      ]
    })
  }

  getPaquete(){
    const params = this.activeRoute.snapshot.params;
    if (params['idp']) {
      this.paqueteService.getPaqueteCrowCoinPorId(params['idp']).subscribe((data:any) => {
        console.log(data);
        this.idPaqueteCrow = data['idPaquete']
      })
    }
  }

  save(){
    this.onSubmit.emit(this.form.value);
  }
}