import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootrerComponent } from './footrer.component';

describe('FootrerComponent', () => {
  let component: FootrerComponent;
  let fixture: ComponentFixture<FootrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootrerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
