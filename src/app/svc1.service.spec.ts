import { TestBed } from '@angular/core/testing';

import { Svc1Service } from './svc1.service';

describe('Svc1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Svc1Service = TestBed.get(Svc1Service);
    expect(service).toBeTruthy();
  });
});
