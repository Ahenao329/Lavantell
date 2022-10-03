import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminServiciosPageComponent } from './admin-servicios-page.component';

describe('AdminServiciosPageComponent', () => {
  let component: AdminServiciosPageComponent;
  let fixture: ComponentFixture<AdminServiciosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminServiciosPageComponent ]
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
