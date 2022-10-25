import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginPagesComponent } from './login-pages.component';

describe('LoginPagesComponent', () => {
  let component: LoginPagesComponent;
  let fixture: ComponentFixture<LoginPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPagesComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        MatSnackBarModule,
        BrowserAnimationsModule
        
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('🔴, deberia de retornar "invalido" el formulario', () => {
// Arrange
    const mockCredentials = {
      email: '1x2x3x4x5x6',
      password: '1111111111111111111111111111111111111111111111'
    }

    const emailForm: any = component.formLogin.get('email')
    const password: any = component.formLogin.get('password')
//Act

    emailForm.setValue(mockCredentials.email)
    password.setValue(mockCredentials.password)
//Assert
    expect(component.formLogin.invalid).toEqual(true);
  });


  it('✔️✔️, deberia de retornar "valido" el formulario', () => {
    // Arrange
        const mockCredentials = {
          email: 'correo@correo.com',
          password: '12345667'
        }
    
        const emailForm: any = component.formLogin.get('email')
        const password: any = component.formLogin.get('password')
    //Act
    
        emailForm.setValue(mockCredentials.email)
        password.setValue(mockCredentials.password)
    //Assert
        expect(component.formLogin.invalid).toEqual(false);
      });

  it('👉, El bottondeberia tener la palabra "Iniciar Sesión"', () => {

        const elementRef = fixture.debugElement.query(By.css('button'))
        const getInnerText = elementRef.nativeElement.innerText

            expect(getInnerText).toEqual('Iniciar Sesión');
          });

});
