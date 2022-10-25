import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { ToastrModule } from 'ngx-toastr';

import { ContactanosPageComponent } from './contactanos-page.component';

describe('ContactanosPageComponent', () => {
  let component: ContactanosPageComponent;
  let fixture: ComponentFixture<ContactanosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactanosPageComponent ],
      imports: [ToastrModule.forRoot(),
        HttpClientTestingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        RecaptchaModule,
        RecaptchaFormsModule,],

    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactanosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('🔴, deberia de retornar "invalido" el formulario de contactanos', () => {
    // Arrange
        const mockCredentials = {
          nombre: 'a',
          telefono: 'abcdef',
          correo: '1x2x3x4x5',
          direccion: '@',
          ciudad: '123',
          mensaje: '',
          recaptchaReactive: ''
        }
    
        const nombre: any = component.form.get('nombre')
        const telefono: any = component.form.get('telefono')
        const correo: any = component.form.get('correo')
        const direccion: any = component.form.get('direccion')
        const ciudad: any = component.form.get('ciudad')
        const mensaje: any = component.form.get('mensaje')
        const recaptchaReactive: any = component.form.get('recaptchaReactive')
    //Act
    
        nombre.setValue(mockCredentials.nombre)
        telefono.setValue(mockCredentials.telefono)
        correo.setValue(mockCredentials.correo)
        direccion.setValue(mockCredentials.direccion)
        ciudad.setValue(mockCredentials.ciudad)
        mensaje.setValue(mockCredentials.mensaje)
        recaptchaReactive.setValue(mockCredentials.telefono)
    //Assert
        expect(component.form.invalid).toEqual(true);
      });
    

      it('🔴, deberia de retornar "valido" el formulario de contactanos', () => {
        // Arrange
            const mockCredentials = {
              nombre: 'Juan Jose',
              telefono: '3235155552',
              correo: 'Junajo@hotmail.com',
              direccion: 'calle 30 # 40 - 45',
              ciudad: '123',
              mensaje: 'Quisiera saber mas sobre los servicios que ofrecen',
              recaptchaReactive: '03AIIukzjJJYwmeJ_zKgzfgd1C-A9YPkEEBv47RFF9Ma1h1AOpe9vlN2k5KGI9iBe3WEP9k5YOSkolHVKep3k-CRSe9xu9qC8nBlonlLABXHXKYtT0N_8UMJCwFffnGJ-FIrtcZKvR0jkrfFoZ6h5PJXtNCuAjrJWPKVwx8YqsT1Il6yYQBFwBufkuDYMn7KTO2IDFhpChmnlqWG8gOdVh4q8QJ8_7XB_Kq5F2PWFiDLn3wT8bCdmnK54eGQAW1N1fQCrntLEtHdH4TG3D3NcEZpe77VkQ9FmNHW74KCnBFWwcXoALxsf-FJPANy_voRHcUDRHAXXojfhTBfUgHpuTEA0sJ_94wt1tcv9KnX_-EoBBfKUvfHKxI80AhgdY-SvnyI0z87VrMzhjj1SMqHL5REWA6l4pPceOIGkYPLN8CujYIYAf0fBDmAColBrHqvf0x_iNBf-eXliSv-CbbuKkB84SYpaDWnBMyf81IS5dIH-YWPxz-C_dSLSUX-wp1HVXbl3oduoYzYFNkO_z4Ihq-zVx3Q8HUAF60OVN8yQ8bv258FIBjq7Z9lHdCmR_Kv5_vrvzP3QG_8jE3xgVAxkANfKNeTytEdZfTA'
            }

            const nombre: any = component.form.get('nombre')
            const telefono: any = component.form.get('telefono')
            const correo: any = component.form.get('correo')
            const direccion: any = component.form.get('direccion')
            const ciudad: any = component.form.get('ciudad')
            const mensaje: any = component.form.get('mensaje')
            const recaptchaReactive: any = component.form.get('recaptchaReactive')
        //Act
        
            nombre.setValue(mockCredentials.nombre)
            telefono.setValue(mockCredentials.telefono)
            correo.setValue(mockCredentials.correo)
            direccion.setValue(mockCredentials.direccion)
            ciudad.setValue(mockCredentials.ciudad)
            mensaje.setValue(mockCredentials.mensaje)
            recaptchaReactive.setValue(mockCredentials.telefono)
        //Assert
            expect(component.form.invalid).toEqual(false);
          });
});
