import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { SharedModule } from '@shared/shared.module';
import { ServiciosModule } from '@modules/servicios/servicios.module';


@NgModule({
  declarations: [
    HomePagesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule.forRoot(),
    
    
    
    
  ]
})
export class HomeModule { }
