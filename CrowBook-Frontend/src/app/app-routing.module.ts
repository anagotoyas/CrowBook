import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListarHistoriaComponent } from './user/historias/listar-historia/listar-historia.component';
import { VerMisHistoriasComponent } from './user/historias/ver-mis-historias/ver-mis-historias.component';
import { VerHistoriaComponent } from './user/historias/ver-historia/ver-historia.component';

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
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
