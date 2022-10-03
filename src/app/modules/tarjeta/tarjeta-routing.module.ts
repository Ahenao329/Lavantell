import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetaPagesComponent } from './pages/tarjeta-pages/tarjeta-pages.component';

const routes: Routes = [
  {  path: '',
  component: TarjetaPagesComponent,
  outlet: 'admin'
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarjetaRoutingModule { }
