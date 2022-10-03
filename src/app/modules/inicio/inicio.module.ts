import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioPagesComponent } from './pages/inicio-pages/inicio-pages.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    InicioPagesComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule
  ],
  exports:[
    InicioPagesComponent
  ]
})
export class InicioModule { }
