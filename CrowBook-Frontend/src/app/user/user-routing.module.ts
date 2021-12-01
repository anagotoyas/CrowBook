import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../user/layout/layout.component';
import { CrearHistoriaComponent } from './historias/crear-historia/crear-historia.component';
import { ListarHistoriaComponent } from './historias/listar-historia/listar-historia.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'historias',
        component: ListarHistoriaComponent,
      },
      {
        path: 'historias/crear',
        component: CrearHistoriaComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
