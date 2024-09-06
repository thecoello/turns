import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TurnsComponent } from './turns/turns.component';
import { NgFor } from '@angular/common';
import { GetTurnComponent } from './get-turn/get-turn.component';
import { CallturnComponent } from './callturn/callturn.component';

@NgModule({
  declarations: [
    AppComponent,
    TurnsComponent,
    GetTurnComponent,
    CallturnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFor
  ],
  providers: [NgFor],
  bootstrap: [AppComponent]
})
export class AppModule { }
