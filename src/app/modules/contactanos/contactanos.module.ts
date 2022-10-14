import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ContactanosRoutingModule } from './contactanos-routing.module';
import { ContactanosPageComponent } from './pages/contactanos-page/contactanos-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { SharedModule } from '@shared/shared.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    ContactanosPageComponent
  ],
  imports: [
    RecaptchaModule,
    RecaptchaFormsModule,
    CommonModule,
    ContactanosRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    SharedModule,
    MatExpansionModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
  ],

  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LefcV4iAAAAAHeR4bKS963GYcOrdnmp-XZT_GXc',
      } as RecaptchaSettings,
    },
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'none'}}

  ],

})
export class ContactanosModule { }
