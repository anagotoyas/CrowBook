import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListarHistoriaComponent } from './user/historias/listar-historia/listar-historia.component';
import { VerMisHistoriasComponent } from './user/historias/ver-mis-historias/ver-mis-historias.component';
import { VerHistoriaComponent } from './user/historias/ver-historia/ver-historia.component';
import { ModificarHistoriaComponent} from './user/historias/modificar-historia/modificar-historia.component';
import { ModificarResenasComponent } from './user/historias/modificar-resenas/modificar-resenas.component';
import { VerPerfilesComponent } from './user/perfiles/ver-perfiles/ver-perfiles.component';
import { VerPerfilComponent } from './user/perfiles/ver-perfil/ver-perfil.component';
import { VerMiPerfilComponent } from './user/perfiles/ver-mi-perfil/ver-mi-perfil.component';

const routes: Routes = [
  { 
    path: 'user',
    loadChildren:()=>
      import('./user/user.module').then((m)=>m.UserModule),
  },
  { 
    path: '',
    loadChildren:()=>
      import('./home/home.module').then((m)=>m.HomeModule),
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user/historias',
    component: ListarHistoriaComponent
  },
  {
    path: 'user/historias/ver-mis-historias',
    component: VerMisHistoriasComponent
  },
  {
    path: 'user/historias/ver/:idx',
    component: VerHistoriaComponent
  },
  {
    path: 'user/historias/ver/:idx/modificar/:idz',
    component: ModificarResenasComponent
  },
  {
    path: 'user/historias/ver-mis-historias/:idy/edit',
    component: ModificarHistoriaComponent
  },
  {
    path: 'user/ver-mi-perfil',
    component: VerMiPerfilComponent
  },
  {
    path: 'user/ver-perfiles',
    component: VerPerfilesComponent
  },
  {
    path: 'user/ver-perfil/:idUsuario',
    component: VerPerfilComponent
  },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }