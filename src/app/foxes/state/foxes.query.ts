import { Query } from '@datorama/akita';
import { FoxesState, FoxesStore } from './foxes.store';

export class FoxesQuery extends Query<FoxesState> {
  constructor(protected store: FoxesStore) {
    super(store);
  }
}
