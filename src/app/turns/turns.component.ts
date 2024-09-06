import { AfterContentInit, Component, Input, NgZone, OnInit } from '@angular/core';
import gsap, { Expo } from 'gsap';
import { TurnsService } from '../service/turns.service';
import { Turn } from '../model/turn';
import * as localforage from 'localforage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-turns',
  templateUrl: './turns.component.html',
  styleUrls: ['./turns.component.css']
})
export class TurnsComponent {

  turns: Array<Turn> = []

  constructor(private turnService: TurnsService, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.getBroadcast()
  }

  getBroadcast() {
    this.turnService.sendTurn!.onmessage = (event) => {
      this.ngZone.run(() => {
        this.turns = event.data      
        this.animatiteArrows()
      })
    }
  }

  animatiteArrows(){
    setTimeout(() => {
      const tl = gsap.timeline({ repeat: -1 })
    tl.to('.arrowsgoto', 1, { opacity: 1, stagger: 0.1, ease: Expo.easeInOut })
    tl.to('.arrowsgoto', 1, { opacity: 0.2, stagger: 0.1, ease: Expo.easeOut })
    }, 500);
  }

}