import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoxesService } from '../foxes.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  public form: FormGroup;

  constructor(private _foxes: FoxesService, private _router: Router) {}

  public onSubmit(): void {
    if (this.form.valid) {
      this._foxes.add(this.form.value.name);
      this._router.navigate(['/foxes']);
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
    });
  }
}
