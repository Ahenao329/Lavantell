import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConfig } from 'src/app/config/app.config';
import { InicioPagesComponent } from './pages/inicio-pages/inicio-pages.component';

const routes: Routes = [
  {
  path: '',
  component:InicioPagesComponent,
  outlet: 'child'
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
