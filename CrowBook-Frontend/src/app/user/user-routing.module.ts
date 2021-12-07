import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from '../user/layout/layout.component';
import { CrearHistoriaComponent } from './historias/crear-historia/crear-historia.component';
import { ListarHistoriaComponent } from './historias/listar-historia/listar-historia.component';
import { VerMisHistoriasComponent } from './historias/ver-mis-historias/ver-mis-historias.component';
import { VerHistoriaComponent } from './historias/ver-historia/ver-historia.component';
import { CrearCapituloComponent } from './capitulos/crear-capitulo/crear-capitulo.component';
import { ModificarCapituloComponent } from './capitulos/modificar-capitulo/modificar-capitulo.component';
import { ListarCapituloComponent } from './capitulos/listar-capitulo/listar-capitulo.component';
import {ModificarHistoriaComponent} from './historias/modificar-historia/modificar-historia.component';
import { CargarCapituloComponent } from './capitulos/cargar-capitulo/cargar-capitulo.component';


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
      },
     
      
    ]
  },
  {
    path: 'historias',
    component: LayoutComponent,
    children: [
      {
        path: 'ver-mis-historias',
        component: VerMisHistoriasComponent,
      },
      {
        path: 'ver-mis-historias/:idy/edit',
         component: ModificarHistoriaComponent,
      },
      
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'historias/:id',
        component: ListarHistoriaComponent,
        
      },
      {
        path: 'historias/:id/ver/:idx',
        component: VerHistoriaComponent,
      }
      
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      
      {
        path: 'capitulos',
        component: ListarCapituloComponent,
      },
      {
        path: 'capitulos/crear/:idx',
        component: CrearCapituloComponent,
      },
     
      
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      
      {
        path: 'capitulos', //capitulos
        component: ListarCapituloComponent,
      },
      {
        path: 'capitulos/listar-capitulo/:idx/:idy/modificar',//DILE P Dile Dile Dile 
        component: ModificarCapituloComponent,
        
      }, //'user/capitulos/listar-capitulo/1/modificar'
     
      
    ]
  },
  {
    path: 'capitulos',
    component: LayoutComponent,
    children: [
      {
        path: 'listar-capitulo/:idx',
        component: ListarCapituloComponent,
      }, 
      
    ]
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'capitulos',
        component: ListarCapituloComponent,
        
      },
      {
        path: 'capitulos/cargar/:idx',
        component: CargarCapituloComponent,
      }
      
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
