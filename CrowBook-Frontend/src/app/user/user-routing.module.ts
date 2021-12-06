import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { LayoutComponent } from '../user/layout/layout.component';
import { CrearHistoriaComponent } from './historias/crear-historia/crear-historia.component';
import { CrearCapituloComponent } from './capitulos/crear-capitulo/crear-capitulo.component';
import { ListarHistoriaComponent } from './historias/listar-historia/listar-historia.component';
import { VerMisHistoriasComponent } from './historias/ver-mis-historias/ver-mis-historias.component';
import { VerHistoriaComponent } from './historias/ver-historia/ver-historia.component';
import {ModificarHistoriaComponent} from './historias/modificar-historia/modificar-historia.component';

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
<<<<<<< HEAD
=======
     
     
      
>>>>>>> 316857c7619f41ab72163b4f2e5369df7fc32d03
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
      },
<<<<<<< HEAD
      {
        path: 'historias/:id/capitulos/crear',
        component: CrearCapituloComponent,
      } 
    ]
  },
=======
      
    
      
    ]
  },

  

  
  
>>>>>>> 316857c7619f41ab72163b4f2e5369df7fc32d03
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
