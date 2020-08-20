import { Injectable } from '@angular/core';
import { FoxesStore } from './foxes.store';

@Injectable({
  providedIn: 'root',
})
export class FoxesAkitaService {
  constructor(private _foxesStore: FoxesStore) {}

  public add(foxname: string): void {
    const newFox = {
      id: Math.floor(Math.random() * 10000),
      name: foxname,
    };
    this._foxesStore.add(newFox);
  }

  public reset(): void {
    this._foxesStore.reset();
  }
}
