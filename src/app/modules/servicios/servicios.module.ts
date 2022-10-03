import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ServiciosPageComponent } from './pages/servicios-page/servicios-page.component';
import { AdminServiciosPageComponent } from './page/admin-servicios-page/admin-servicios-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ServiciosPageComponent,
    AdminServiciosPageComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    
  ]
})
export class ServiciosModule { }
