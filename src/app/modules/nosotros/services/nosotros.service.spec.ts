import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { NosotrosService } from './nosotros.service';

describe('NosotrosService', () => {
  let service: NosotrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(NosotrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
