import { TestBed } from '@angular/core/testing';

import { FoxesService } from './foxes.service';

describe('FoxesService', () => {
  let service: FoxesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoxesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
