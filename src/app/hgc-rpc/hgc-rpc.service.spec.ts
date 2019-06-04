import { TestBed } from '@angular/core/testing';

import { HgcRPCService } from './hgc-rpc.service';

describe('HgcRPCService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HgcRPCService = TestBed.get(HgcRPCService);
    expect(service).toBeTruthy();
  });
});
