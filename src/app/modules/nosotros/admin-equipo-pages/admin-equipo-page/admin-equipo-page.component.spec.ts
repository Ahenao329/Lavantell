import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEquipoPageComponent } from './admin-equipo-page.component';

describe('AdminEquipoPageComponent', () => {
  let component: AdminEquipoPageComponent;
  let fixture: ComponentFixture<AdminEquipoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEquipoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEquipoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
