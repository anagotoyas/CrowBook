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
import { CrearResenaComponent } from './historias/crear-resena/crear-resena.component';
import {ModificarResenasComponent} from './historias/modificar-resenas/modificar-resenas.component'
import { CrearComentarioComponent } from './capitulos/crear-comentario/crear-comentario.component'
import { ModificarComentarioComponent } from './capitulos/modificar-comentario/modificar-comentario.component';
import { ListarHistoriasBibliotecaComponent } from './historias/listar-historias-biblioteca/listar-historias-biblioteca.component';
import { VerPerfilesComponent } from './perfiles/ver-perfiles/ver-perfiles.component';
import { VerPerfilComponent } from './perfiles/ver-perfil/ver-perfil.component';
import { VerMiPerfilComponent } from './perfiles/ver-mi-perfil/ver-mi-perfil.component';

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
      {
        path: 'historias/biblioteca',
        component: ListarHistoriasBibliotecaComponent,
      },
      {
        path: 'ver-mi-perfil',
        component: VerMiPerfilComponent,
      },
      {
        path: 'ver-perfiles',
        component: VerPerfilesComponent,
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
    path: 'historias/:id/ver/:idx',
    component:LayoutComponent,
    children: [
      {
        path: 'crear-resena', 
        component: CrearResenaComponent,
      },
      {
        path: 'modificar/:idz',
        component: ModificarResenasComponent,
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
        path: 'capitulos/:id/cargar/:idx',
        component: CargarCapituloComponent,
      }
      
    ]
  },
  {
    path: 'capitulos/:id/cargar/:idy', //Era idx
    component:LayoutComponent,
    children: [
      {
        path: 'crear-comentario', 
        component: CrearComentarioComponent,
      },
      {
        path: 'modificar/:idz',
        component: ModificarComentarioComponent,
      },
    ]
  },
  {
    path: 'ver-perfiles',
    component:LayoutComponent,
    children: [
      {
        path: 'ver-perfil/:idUsuario', 
        component: VerPerfilComponent,
      },
    ]
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
