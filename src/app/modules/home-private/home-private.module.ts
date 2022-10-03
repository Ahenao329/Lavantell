import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePrivateRoutingModule } from './home-private-routing.module';
import { HomeprivateComponent } from './page/homeprivate/homeprivate.component';
import { SharedModule } from '@shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    HomeprivateComponent
  ],
  imports: [
    CommonModule,
    HomePrivateRoutingModule,
    SharedModule.forRoot(),
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,

  ]
})
export class HomePrivateModule { }
