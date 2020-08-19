import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Fox {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class FoxesService {
  private _foxes$: BehaviorSubject<Fox[]> = new BehaviorSubject([]);

  public get foxes(): Fox[] {
    return this._foxes$.value;
  }

  public add(foxname: string): Fox {
    const newFox = {
      id: this.foxes.length + 1,
      name: foxname,
    };

    this._foxes$.next([...this.foxes, newFox]);
    return newFox;
  }

  public list(): Observable<Fox[]> {
    return this._foxes$;
  }

  public reset(): void {
    this._foxes$.next([]);
  }
}
