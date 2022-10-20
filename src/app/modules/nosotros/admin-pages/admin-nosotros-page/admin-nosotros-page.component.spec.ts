import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNosotrosPageComponent } from './admin-nosotros-page.component';

describe('AdminNosotrosPageComponent', () => {
  let component: AdminNosotrosPageComponent;
  let fixture: ComponentFixture<AdminNosotrosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNosotrosPageComponent ]
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
