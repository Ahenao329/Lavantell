import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSucursalesPageComponent } from './admin-sucursales-page.component';

describe('AdminSucursalesPageComponent', () => {
  let component: AdminSucursalesPageComponent;
  let fixture: ComponentFixture<AdminSucursalesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSucursalesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSucursalesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
