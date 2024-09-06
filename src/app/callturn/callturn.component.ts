import { Component, NgZone, OnInit } from '@angular/core';
import { Turn } from '../model/turn';
import { TurnsService } from '../service/turns.service';

@Component({
  selector: 'app-callturn',
  templateUrl: './callturn.component.html',
  styleUrls: ['./callturn.component.css']
})
export class CallturnComponent implements OnInit{
  turns: Array<Turn> = []

  constructor(private turnService: TurnsService, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.getBroadcast()
  }

  getBroadcast() {
   this.turnService.sendTurn!.onmessage = (event) => {
      this.ngZone.run(() => {
        let turn = new Turn()
        turn = event.data
        turn.id = this.turns.length + 1
        turn.number = this.turns.length + 1
        this.turns.push(event.data)
        this.turnService.createTurn(turn)
      })
    } 
  }

  callTurn(turn:Turn, i: number, window: number){
    turn.window = window
    turn.call = true
    this.turns[i] = turn
    this.turnService.callTurn(this.turns)
    this.getBroadcast()
  }

  attendedTurn(turn:Turn, i: number){
    turn.attended = true
    this.turnService.callTurn(this.turns)
    this.getBroadcast()
  }

}