import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-panel',
  templateUrl: './game-panel.component.html',
  styleUrls: ['./game-panel.component.scss']
})
export class GamePanelComponent {
    yourName = "Your Name";
    oponentName="Oponent Name";

    constructor() { }

}
