import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPagesComponent } from './inicio-pages.component';

describe('InicioPagesComponent', () => {
  let component: InicioPagesComponent;
  let fixture: ComponentFixture<InicioPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
