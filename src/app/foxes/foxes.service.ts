import { Injectable } from '@angular/core';

export interface Fox {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class FoxesService {
  public foxes: Fox[] = [];

  public add(foxname: string): Fox {
    const newFox = {
      id: this.foxes.length + 1,
      name: foxname,
    };

    this.foxes.push(newFox);
    return newFox;
  }
}
