import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactanosRoutingModule } from './contactanos-routing.module';
import { ContactanosPageComponent } from './pages/contactanos-page/contactanos-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { SharedModule } from '@shared/shared.module';


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
  ],

  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LcVRwUiAAAAAHSVQWkyRN6YAAqHxfWFe33KmxDZ',
      } as RecaptchaSettings,
    },
  ],

})
export class ContactanosModule { }
