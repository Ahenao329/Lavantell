import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren:() => import('@modules/inicio/inicio.module').then(m => m.InicioModule)
  },  
  {
    path: 'nosotros',
    loadChildren:() => import('@modules/nosotros/nosotros.module').then(m => m.NosotrosModule)
  },  
  {
    path: 'servicios',
    loadChildren:() => import('@modules/servicios/servicios.module').then(m => m.ServiciosModule)
  },
  {
    path: 'sucursales',
    loadChildren:() => import('@modules/sucursales/sucursales.module').then(m => m.SucursalesModule)
  },
  {
    path: 'contactanos',
    loadChildren:() => import('@modules/contactanos/contactanos.module').then(m => m.ContactanosModule)
  },
  {
    path: '**',
    redirectTo: '/inicio'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
