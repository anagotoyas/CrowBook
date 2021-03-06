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
import { FormComentarioModificarComponent } from './shared/form-comentario-modificar/form-comentario-modificar.component';
import { ModificarComentarioComponent } from './capitulos/modificar-comentario/modificar-comentario.component';
import { ListarHistoriasBibliotecaComponent } from './historias/listar-historias-biblioteca/listar-historias-biblioteca.component';
import { ListarHistoriasFavoritoComponent } from './historias/listar-historias-favorito/listar-historias-favorito.component';
import { VerMiPerfilComponent } from './perfiles/ver-mi-perfil/ver-mi-perfil.component';
import { VerPerfilComponent } from './perfiles/ver-perfil/ver-perfil.component';
import { VerPerfilesComponent } from './perfiles/ver-perfiles/ver-perfiles.component';
import { ListarComprasComponent } from './compras/listar-compras/listar-compras.component';
import { CrearCompraComponent } from './compras/crear-compra/crear-compra.component';
import { CrowshopComponent } from './compras/crowshop/crowshop.component';
import { FormCompraComponent } from './shared/form-compra/form-compra.component';
import { RegistrarUsuarioComponent } from '../registrar/registrar-usuario/registrar-usuario.component';
import { FormRegistarUsuarioComponent } from '../registrar/form-registar-usuario/form-registar-usuario.component';
import { ModificarPerfilComponent } from './perfiles/modificar-perfil/modificar-perfil.component';
import { FormModificarPerfilComponent } from './shared/form-modificar-perfil/form-modificar-perfil.component';
import { CrearMembresiaComponent } from './compras/crear-membresia/crear-membresia.component';
import { FormMembresiaComponent } from './shared/form-membresia/form-membresia.component';
import { ModalComponent } from './historias/shared/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatButtonModule } from '@angular/material/button';
import { ListarHistoriaCategoriaComponent } from './historias/listar-historia-categoria/listar-historia-categoria.component';
import { ListarDonacionesComponent } from './listar-donaciones/listar-donaciones.component';



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
    FormComentarioModificarComponent,
    ModificarComentarioComponent,
    ListarHistoriasBibliotecaComponent,
    ListarHistoriasFavoritoComponent,
    VerMiPerfilComponent,
    VerPerfilComponent,
    VerPerfilesComponent,
    ListarComprasComponent,
    CrearCompraComponent,
    CrowshopComponent,
    FormCompraComponent,
    ModificarPerfilComponent,
    FormModificarPerfilComponent,
    CrearMembresiaComponent,
    FormMembresiaComponent,
    ModalComponent,
    ListarHistoriaCategoriaComponent,
    ListarDonacionesComponent,
   
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule

  ],
  entryComponents: [ModalComponent],
})
export class UserModule { }
