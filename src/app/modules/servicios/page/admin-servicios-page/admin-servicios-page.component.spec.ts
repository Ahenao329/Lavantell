import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminServiciosPageComponent } from './admin-servicios-page.component';

describe('AdminServiciosPageComponent', () => {
  let component: AdminServiciosPageComponent;
  let fixture: ComponentFixture<AdminServiciosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminServiciosPageComponent,
         ],
         imports: [
          HttpClientTestingModule,
          RouterTestingModule,
          ReactiveFormsModule,
          FormsModule,
          MatSnackBarModule,
          BrowserAnimationsModule,
         ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminServiciosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
