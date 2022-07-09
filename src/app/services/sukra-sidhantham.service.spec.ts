import { TestBed } from '@angular/core/testing';

import { SukraSidhanthamService } from './sukra-sidhantham.service';

describe('SukraSidhanthamService', () => {
  let service: SukraSidhanthamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SukraSidhanthamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
