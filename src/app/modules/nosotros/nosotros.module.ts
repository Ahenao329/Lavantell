import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NosotrosRoutingModule } from './nosotros-routing.module';
import { NosotrosPageComponent } from './pages/nosotros-page/nosotros-page.component';
import { SharedModule } from '@shared/shared.module';
import { AdminPopupNosotrosPageComponent } from './admin-pages/admin-popup-nosotros-page/admin-popup-nosotros-page.component';
import { AdminNosotrosPageComponent } from './admin-pages/admin-nosotros-page/admin-nosotros-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { AdminEquipoPageComponent } from './admin-equipo-pages/admin-equipo-page/admin-equipo-page.component';
import { AdminPopupEquipoPagesComponent } from './admin-equipo-pages/admin-popup-equipo-pages/admin-popup-equipo-pages.component';

@NgModule({
  declarations: [
    NosotrosPageComponent,
    AdminPopupNosotrosPageComponent,
    AdminNosotrosPageComponent,
    FilterPipePipe,
    AdminEquipoPageComponent,
    AdminPopupEquipoPagesComponent,
  ],
  imports: [
    CommonModule,
    NosotrosRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,

  ]
})
export class NosotrosModule { }
