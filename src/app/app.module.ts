import { GameService } from './services/game.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { XOSheetComponent } from './xo-sheet/xo-sheet.component';
import { XOBoardComponent } from './xo-board/xo-board.component';
import { PlayerBarComponent } from './player-bar/player-bar.component';
import { GamePanelComponent } from './game-panel/game-panel.component';
import { SetupPanelComponent } from './setup-panel/setup-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    XOSheetComponent,
    XOBoardComponent,
    PlayerBarComponent,
    GamePanelComponent,
    SetupPanelComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [
      GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
