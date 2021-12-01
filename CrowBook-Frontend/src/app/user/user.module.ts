import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListarHistoriaComponent } from './historias/listar-historia/listar-historia.component';
import { CrearHistoriaComponent } from './historias/crear-historia/crear-historia.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormHistoriaComponent } from './historias/shared/form-historia/form-historia.component';


@NgModule({
  declarations: [
    ListarHistoriaComponent,
    CrearHistoriaComponent,
    LayoutComponent,
    FormHistoriaComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule

  ]
})
export class UserModule { }
