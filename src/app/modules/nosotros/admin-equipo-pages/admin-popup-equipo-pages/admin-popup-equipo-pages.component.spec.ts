import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPopupEquipoPagesComponent } from './admin-popup-equipo-pages.component';

describe('AdminPopupEquipoPagesComponent', () => {
  let component: AdminPopupEquipoPagesComponent;
  let fixture: ComponentFixture<AdminPopupEquipoPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPopupEquipoPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPopupEquipoPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
