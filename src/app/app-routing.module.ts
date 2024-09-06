import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetTurnComponent } from './get-turn/get-turn.component';
import { TurnsComponent } from './turns/turns.component';
import { CallturnComponent } from './callturn/callturn.component';

const routes: Routes = [
  {path: 'geturn', component: GetTurnComponent},
  {path: 'turns', component: TurnsComponent},
  {path: 'callturns', component: CallturnComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
