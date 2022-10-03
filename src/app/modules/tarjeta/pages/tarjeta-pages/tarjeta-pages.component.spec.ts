import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPagesComponent } from './tarjeta-pages.component';

describe('TarjetaPagesComponent', () => {
  let component: TarjetaPagesComponent;
  let fixture: ComponentFixture<TarjetaPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
