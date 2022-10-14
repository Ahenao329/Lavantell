import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPopupSucursalesPageComponent } from './admin-popup-sucursales-page.component';

describe('AdminPopupSucursalesPageComponent', () => {
  let component: AdminPopupSucursalesPageComponent;
  let fixture: ComponentFixture<AdminPopupSucursalesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPopupSucursalesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPopupSucursalesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
