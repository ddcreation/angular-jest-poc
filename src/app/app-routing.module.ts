import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ListComponent } from './foxes/list/list.component';
import { CreateComponent } from './foxes/create/create.component';

const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  {
    path: 'foxes',
    children: [
      { path: 'create', component: CreateComponent },
      { path: '', component: ListComponent },
    ],
  },
  { path: '**', redirectTo: 'counter' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
