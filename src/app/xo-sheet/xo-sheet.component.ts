import { Component, Input } from '@angular/core';
import { GameService } from "../services/game.service"
@Component({
  selector: 'xo-sheet',
  templateUrl: './xo-sheet.component.html',
  styleUrls: ['./xo-sheet.component.scss']
})
export class XOSheetComponent {
    @Input("sheet") sheet;

    cellIndexes:number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    public winner = null;
    
    constructor(public gameService: GameService) {}

    async moveHandler(cell, sheet) {
        this.winner = await this.gameService.newMove(cell, sheet);
        return this.winner;
    }

    
}
