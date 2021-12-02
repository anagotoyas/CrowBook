import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListarHistoriaComponent } from './historias/listar-historia/listar-historia.component';
import { CrearHistoriaComponent } from './historias/crear-historia/crear-historia.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { FormHistoriaComponent } from './shared/form-historia/form-historia.component';
import { VerMisHistoriasComponent } from './historias/ver-mis-historias/ver-mis-historias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VerHistoriaComponent } from './historias/ver-historia/ver-historia.component';


@NgModule({
  declarations: [
    ListarHistoriaComponent,
    VerMisHistoriasComponent,
    CrearHistoriaComponent,
    LayoutComponent,
    FormHistoriaComponent,
    VerMisHistoriasComponent,
    VerHistoriaComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule

  ]
})
export class UserModule { }
