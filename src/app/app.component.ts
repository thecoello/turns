import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Turn } from './model/turn';
import { TurnsService } from './service/turns.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{

  hide:boolean = false
  title = 'turns';
  constructor(private turnService: TurnsService){}
  turns: Array<Turn> = []


  getTurns(event: any){
    this.turns = event
  }
  



}
