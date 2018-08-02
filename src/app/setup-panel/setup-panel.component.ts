import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'setup-panel',
  templateUrl: './setup-panel.component.html',
  styleUrls: ['./setup-panel.component.scss']
})
export class SetupPanelComponent {

  constructor(private gameService: GameService) { }

  newGame() {
    this.gameService.resetGame();
  }

}
