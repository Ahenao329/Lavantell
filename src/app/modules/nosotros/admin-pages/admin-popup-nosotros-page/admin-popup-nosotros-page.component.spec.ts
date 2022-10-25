import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AdminPopupNosotrosPageComponent } from './admin-popup-nosotros-page.component';

describe('AdminPopupNosotrosPageComponent', () => {
  let component: AdminPopupNosotrosPageComponent;
  let fixture: ComponentFixture<AdminPopupNosotrosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPopupNosotrosPageComponent ],
      imports: [ 
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule,
        MatSnackBarModule,
      ],
      providers: [
          { provide: MAT_DIALOG_DATA, useValue: {} },
          { provide: MatDialogRef, useValue: {} }
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPopupNosotrosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
