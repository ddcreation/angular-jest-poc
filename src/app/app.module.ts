import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { NavComponent } from './nav/nav.component';
import { ListComponent } from './foxes/list/list.component';
import { CreateComponent } from './foxes/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    NavComponent,
    ListComponent,
    CreateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
