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

  it('initial empty state', () => {
    expect(service.foxes.length).toBe(0);
  });

  it('should add fox', () => {
    const newFoxName = 'testFox';
    const addedFox = service.add(newFoxName);

    // Check new property length
    expect(service.foxes.length).toBe(1);

    // Sample fox
    const sampleFox = {
      id: 1,
      name: newFoxName,
    };

    // Compare datas
    // Received from the add function response:
    expect(addedFox).toEqual(sampleFox);

    // In property:
    expect(service.foxes[0]).toEqual(sampleFox);
  });
});
