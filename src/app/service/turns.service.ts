import { EventEmitter, Injectable, Input, Output } from '@angular/core';
import * as localforage from 'localforage';
import { Turn } from '../model/turn';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnsService {

  sendTurn?: BroadcastChannel = new BroadcastChannel('sendTurn')

  constructor() {}

  createTurn(turn?: Turn) {
    this.sendTurn?.postMessage(turn)
  }

  callTurn(turns?: Array<Turn>){
    this.sendTurn?.postMessage(turns)
  }

}