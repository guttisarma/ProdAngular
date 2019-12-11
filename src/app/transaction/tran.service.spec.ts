import { TestBed } from '@angular/core/testing';

import { TranService } from './tran.service';

describe('TranService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranService = TestBed.get(TranService);
    expect(service).toBeTruthy();
  });
});
