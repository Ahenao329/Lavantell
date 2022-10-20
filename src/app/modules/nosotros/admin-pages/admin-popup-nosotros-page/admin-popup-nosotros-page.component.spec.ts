import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPopupNosotrosPageComponent } from './admin-popup-nosotros-page.component';

describe('AdminPopupNosotrosPageComponent', () => {
  let component: AdminPopupNosotrosPageComponent;
  let fixture: ComponentFixture<AdminPopupNosotrosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPopupNosotrosPageComponent ]
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
