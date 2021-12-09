import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ListarHistoriaComponent } from './historias/listar-historia/listar-historia.component';
import { CrearHistoriaComponent } from './historias/crear-historia/crear-historia.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { FormHistoriaComponent } from './shared/form-historia/form-historia.component';
import { FormCapituloComponent } from './shared/form-capitulo/form-capitulo.component';
import { VerMisHistoriasComponent } from './historias/ver-mis-historias/ver-mis-historias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VerHistoriaComponent } from './historias/ver-historia/ver-historia.component';
import { ModificarHistoriaComponent } from './historias/modificar-historia/modificar-historia.component';
import { ListarCapituloComponent } from './capitulos/listar-capitulo/listar-capitulo.component';
import { CrearCapituloComponent } from './capitulos/crear-capitulo/crear-capitulo.component';
import { ModificarCapituloComponent } from './capitulos/modificar-capitulo/modificar-capitulo.component';
import { FormModificarComponent } from './shared/form-modificar/form-modificar.component';
import { FormCapituloModificarComponent } from './shared/form-capitulo-modificar/form-capitulo-modificar.component';
import { CargarCapituloComponent } from './capitulos/cargar-capitulo/cargar-capitulo.component';
import { CrearResenaComponent } from './historias/crear-resena/crear-resena.component';
import { FormResenaComponent } from './shared/form-resena/form-resena.component';
import { ModificarResenasComponent } from './historias/modificar-resenas/modificar-resenas.component';
import { FormResenasModificarComponent } from './shared/form-resenas-modificar/form-resenas-modificar.component';
import { CrearComentarioComponent } from './capitulos/crear-comentario/crear-comentario.component';
import { FormComentarioComponent } from './shared/form-comentario/form-comentario.component';



@NgModule({
  declarations: [
    ListarHistoriaComponent,
    VerMisHistoriasComponent,
    CrearHistoriaComponent,
    LayoutComponent,
    FormHistoriaComponent,
    VerMisHistoriasComponent,
    VerHistoriaComponent,
    ListarCapituloComponent,
    CrearCapituloComponent,
    ModificarCapituloComponent,
    FormCapituloComponent,
    ModificarHistoriaComponent,
    FormModificarComponent,
    FormCapituloComponent,
    FormCapituloModificarComponent,
    CargarCapituloComponent,
    CrearResenaComponent,
    FormResenaComponent,
    ModificarResenasComponent,
    FormResenasModificarComponent,
    CrearComentarioComponent,
    FormComentarioComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule

  ]
})
export class UserModule { }
