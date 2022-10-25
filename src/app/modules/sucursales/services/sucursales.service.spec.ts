import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SucursalesService } from './sucursales.service';

describe('SucursalesService', () => {
  let service: SucursalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]

    });
    service = TestBed.inject(SucursalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
