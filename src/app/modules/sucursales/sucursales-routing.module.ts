import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSucursalesPageComponent } from './admin-pages/admin-sucursales-page/admin-sucursales-page.component';
import { SucursalesPageComponent } from './pages/sucursales-page/sucursales-page.component';

const routes: Routes = [
  {  path: '',
  component: SucursalesPageComponent,
  outlet: 'child'
},
{  path: '',
component: AdminSucursalesPageComponent,
outlet: 'admin'

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalesRoutingModule { }
