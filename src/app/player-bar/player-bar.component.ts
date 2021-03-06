import { Component, Input } from '@angular/core';

@Component({
  selector: 'player-bar',
  templateUrl: './player-bar.component.html',
  styleUrls: ['./player-bar.component.scss']
})
export class PlayerBarComponent {

    @Input("player-name") playerName;
    @Input("piece") piece;
    @Input("player-turn") playerTurn;
    @Input("remaining-time") remainingTime;

    constructor() { }


}
