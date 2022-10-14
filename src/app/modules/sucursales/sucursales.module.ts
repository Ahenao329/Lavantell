import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { SucursalesRoutingModule } from './sucursales-routing.module';
import { SucursalesPageComponent } from './pages/sucursales-page/sucursales-page.component';
import { SharedModule } from '@shared/shared.module';
import { AdminSucursalesPageComponent } from './admin-pages/admin-sucursales-page/admin-sucursales-page.component';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AdminPopupSucursalesPageComponent } from './admin-pages/admin-popup-sucursales-page/admin-popup-sucursales-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    SucursalesPageComponent,
    AdminSucursalesPageComponent,
    AdminPopupSucursalesPageComponent
  ],
  imports: [
    
    CommonModule,
    SucursalesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    FormsModule,

  ]
})
export class SucursalesModule { }
