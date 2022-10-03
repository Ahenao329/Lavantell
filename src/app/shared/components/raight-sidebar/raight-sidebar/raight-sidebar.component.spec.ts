import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaightSidebarComponent } from './raight-sidebar.component';

describe('RaightSidebarComponent', () => {
  let component: RaightSidebarComponent;
  let fixture: ComponentFixture<RaightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaightSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
