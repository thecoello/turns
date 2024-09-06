import { Component, EventEmitter, NgZone, OnInit, Output } from '@angular/core';
import { TurnsService } from '../service/turns.service';
import { Turn } from '../model/turn';

@Component({
  selector: 'app-get-turn',
  templateUrl: './get-turn.component.html',
  styleUrls: ['./get-turn.component.css']
})
export class GetTurnComponent implements OnInit {
  
  turn?: Turn 

  constructor(private turnService: TurnsService, private ngZone: NgZone){}

  ngOnInit(): void {
   this.getBroadcast()
  }

  getBroadcast() {
    this.turnService.sendTurn!.onmessage = (event) => {
       this.ngZone.run(() => {
         this.turn = event.data

         setTimeout(() => {
          this.turn = undefined
         }, 3000);
       })
     } 
   }

  createTurn(prefix: string){
    const turn = new Turn()    
    turn.prefix = prefix
    turn.attended = false
    this.turnService.createTurn(turn)
  }

}
