import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';
import * as mockRaw from '../../../data/user.json'

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let mockUser: any = (mockRaw as any).default
  let httpClientSpy: {post: jasmine.Spy}
  let coockie: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    // service = new LoginService(httpClientSpy as any, coockie )
  });

  it('should be created', () => {
    // expect(service).toBeTruthy();
  });

  // it('debe retornar un objecto con "data" y "tokenSession"', () => {
      // Arrange
      
      // const user: any = mockUser.UserOk

      // httpClientSpy.post.and.returnValue(
      //   of({a:1})
      // )


        //Act
      // service.login(user)
      // .subscribe(ResponseApi => {
      //   console.log('🧼🧼🧼🧼🧼',ResponseApi);
        
      // })
  // });

});
