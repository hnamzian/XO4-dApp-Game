import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.scss']
})
export class GamePanelComponent {
    yourName = "Your Name";
    oponentName="Oponent Name";
    hostTime;
    guestTime;
    
    constructor(private gameService: GameService) { }

}
