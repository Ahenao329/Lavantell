import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ContactanosService } from './contactanos.service';

describe('ContactanosService', () => {
  let service: ContactanosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ContactanosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
