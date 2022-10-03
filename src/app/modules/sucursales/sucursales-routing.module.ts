import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SucursalesPageComponent } from './pages/sucursales-page/sucursales-page.component';

const routes: Routes = [
  {  path: '',
  component: SucursalesPageComponent,
  outlet: 'child'

}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalesRoutingModule { }
