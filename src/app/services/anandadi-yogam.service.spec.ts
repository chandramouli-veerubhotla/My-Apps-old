import { TestBed } from '@angular/core/testing';

import { AnandadiYogamService } from './anandadi-yogam.service';

describe('AnandadiYogamService', () => {
  let service: AnandadiYogamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnandadiYogamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
