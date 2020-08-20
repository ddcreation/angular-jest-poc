import { TestBed } from '@angular/core/testing';

import { FoxesAkitaService } from './foxes-akita.service';
import { FoxesStore } from './foxes.store';
import { FoxesQuery } from './foxes.query';

describe('FoxesAkitaService', () => {
  let service: FoxesAkitaService;
  let query: FoxesQuery;
  let store: FoxesStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoxesStore],
    });
    service = TestBed.inject(FoxesAkitaService);
    store = TestBed.inject(FoxesStore);
    query = new FoxesQuery(store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have empty initial state', () => {
    expect(query.getValue()).toMatchSnapshot('initialState');
  });

  it('should add a fox', () => {
    service.add('New fox');

    const entities = query.getValue().entities;
    expect(entities[Object.keys(entities)[0]]).toMatchSnapshot({
      id: expect.any(Number),
    });
  });

  it('should reset', () => {
    service.reset();

    expect(query.getValue()).toMatchSnapshot('initialState');
  });
});
