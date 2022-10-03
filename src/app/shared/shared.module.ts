import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FootrerComponent } from './components/footrer/footrer.component';
import { RouterLink, RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from 'ng-recaptcha';
import { RaightSidebarComponent } from './components/raight-sidebar/raight-sidebar/raight-sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    SideBarComponent,
    FootrerComponent,
    SpinnerComponent,
    RaightSidebarComponent
  ],
  imports: [
    RecaptchaV3Module,
    CommonModule,
    RouterLink,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,


    ],
  exports:[
    SideBarComponent,
    FootrerComponent,
    SpinnerComponent,
    RaightSidebarComponent,
    ],
    providers: [
      {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: '6LeLfhYiAAAAANqq6NcTMdFcGO8YiV6iBt7Vh_SM',
    }]
    
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
    }}}