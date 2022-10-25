import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipePipe } from '@modules/nosotros/pipes/filter-pipe.pipe';
import { OrderListPipe } from '@shared/pipe/order-list.pipe';

import { AdminNosotrosPageComponent } from './admin-nosotros-page.component';

describe('AdminNosotrosPageComponent', () => {
  let component: AdminNosotrosPageComponent;
  let fixture: ComponentFixture<AdminNosotrosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNosotrosPageComponent,
                      FilterPipePipe,
                       OrderListPipe ],
      imports: [HttpClientTestingModule,
                  MatSnackBarModule,
                  MatDialogModule,
                  BrowserAnimationsModule],
      providers: [
          { provide: MAT_DIALOG_DATA, useValue: {} },
          { provide: MatDialogRef, useValue: {} }
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminNosotrosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
