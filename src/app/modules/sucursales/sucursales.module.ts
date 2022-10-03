import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { SucursalesRoutingModule } from './sucursales-routing.module';
import { SucursalesPageComponent } from './pages/sucursales-page/sucursales-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    SucursalesPageComponent
  ],
  imports: [
    CommonModule,
    SucursalesRoutingModule,
    SharedModule,
    MatExpansionModule,

  ]
})
export class SucursalesModule { }
