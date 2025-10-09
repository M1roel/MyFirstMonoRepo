import { TestBed } from '@angular/core/testing';

import { AtomicComponentsService } from './atomic-components.service';

describe('AtomicComponentsService', () => {
  let service: AtomicComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtomicComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
