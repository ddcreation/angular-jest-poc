import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Fox } from '../foxes.service';

export interface FoxesState extends EntityState<Fox, number> {}

@StoreConfig({ name: 'foxes', resettable: true })
export class FoxesStore extends EntityStore<FoxesState> {
  constructor() {
    super();
  }
}
