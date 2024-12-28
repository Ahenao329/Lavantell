import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipePipe } from '@shared/pipe/filter-pipe.pipe';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';

import { AdminSucursalesPageComponent } from './admin-sucursales-page.component';
import { HttpClient } from '@angular/common/http';

describe('AdminSucursalesPageComponent', () => {
  let component: AdminSucursalesPageComponent;
  let fixture: ComponentFixture<AdminSucursalesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSucursalesPageComponent,
                        OrderListPipe, 
                        FilterPipePipe,
                    ],
      imports: [HttpClientTestingModule,        
        MatDialogModule,
        MatSnackBarModule,
        BrowserAnimationsModule
      ],
      providers: [
          { provide: MAT_DIALOG_DATA, useValue: {} },
          { provide: MatDialogRef, useValue: {} }
        ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSucursalesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(HttpClient);
  });
});
