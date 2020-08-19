import { Component, OnInit } from '@angular/core';
import { FoxesService, Fox } from '../foxes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public foxes: Fox[];

  constructor(private _foxes: FoxesService) {}

  ngOnInit(): void {
    this._foxes.list$().subscribe((foxes) => (this.foxes = foxes));
  }

  public resetFoxesList(): void {
    this._foxes.reset();
  }
}
