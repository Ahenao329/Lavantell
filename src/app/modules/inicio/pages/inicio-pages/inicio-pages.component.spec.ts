import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routerTransition } from 'src/app/app.animation';

import { InicioPagesComponent } from './inicio-pages.component';

describe('InicioPagesComponent', () => {
  let component: InicioPagesComponent;
  let fixture: ComponentFixture<InicioPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioPagesComponent,
        ],
        imports:[BrowserAnimationsModule]
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
