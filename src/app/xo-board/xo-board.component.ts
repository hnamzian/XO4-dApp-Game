import { Component } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'xo-board',
  templateUrl: './xo-board.component.html',
  styleUrls: ['./xo-board.component.scss']
})
export class XOBoardComponent {
    
    sheetIndexes:number[] = [0, 1, 2, 3]

    constructor(private gameService: GameService) {}

    rotateSheet(sheet, direction: string) {
        this.gameService.rotateSheet(sheet, direction);
    }
}
