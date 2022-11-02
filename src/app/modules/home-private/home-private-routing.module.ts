import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path: 'tarjeta',
    loadChildren:() => import('@modules/tarjeta/tarjeta.module').then(m => m.TarjetaModule),
  },
  {
    path: 'servicios',
    loadChildren:() => import('@modules/servicios/servicios.module').then(m => m.ServiciosModule),
  },
  {
    path: 'sucursales',
    loadChildren:() => import('@modules/sucursales/sucursales.module').then(m => m.SucursalesModule),
  },
  {
    path: 'nosotros',
    loadChildren:() => import('@modules/nosotros/nosotros.module').then(m => m.NosotrosModule),
  },
  {
    path: 'equipo',
    loadChildren:() => import('@modules/nosotros/nosotros.module').then(m => m.NosotrosModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePrivateRoutingModule { }
