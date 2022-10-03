import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaRoutingModule } from './tarjeta-routing.module';
import { TarjetaPagesComponent } from './pages/tarjeta-pages/tarjeta-pages.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TarjetaPagesComponent
  ],
  imports: [
    CommonModule,
    TarjetaRoutingModule,
    ReactiveFormsModule,

  ]
})
export class TarjetaModule { }
