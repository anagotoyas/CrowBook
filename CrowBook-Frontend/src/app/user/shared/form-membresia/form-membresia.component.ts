import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Membresia } from '../../compras/shared/membresia.model';

@Component({
  selector: 'app-form-membresia',
  templateUrl: './form-membresia.component.html',
  styleUrls: ['./form-membresia.component.css']
})
export class FormMembresiaComponent implements OnInit {

  form:FormGroup;

  @Input() membresia: Membresia = new Membresia();
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      costoMembresia: 5,
      usuario: [
        this.membresia.usuario = {idUsuario: sessionStorage.getItem('idUsuario')}
      ]
    })
  
}

save(){
  this.onSubmit.emit(this.form.value);
}

}
