import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    public _hostPiece = 'X';
    public _guestPiece = 'O';
    private _player = 'X';
    private _canRotate = true;
    private _winner = null;
    private _squares: string[] = new Array();
    private winIndexes = [
        [0, 1, 2, 9, 10],
        [1, 2, 9, 10, 11],
        [4, 5, 6, 12, 13],
        [5, 6, 12, 13, 14],
        [6, 7, 8, 15, 16],
        [7, 8, 15, 16, 17],
        [18, 19, 20, 27, 28],
        [19, 20, 27, 28, 29],
        [24, 25, 26, 33, 34],
        [25, 26, 33, 34, 35],
        [21, 22, 23, 30, 31],
        [22, 23, 30, 31, 32],
        [0, 3, 6, 18, 21],
        [3, 6, 18, 21, 24],
        [1, 4, 7, 19, 22],
        [4, 7, 19, 22, 25],
        [2, 5, 8, 20, 23],
        [5, 8, 20, 23, 26],
        [9, 12, 15, 27, 30],
        [12, 15, 27, 30, 33],
        [10, 13, 16, 28, 31],
        [13, 16, 28, 31, 34],
        [11, 14, 17, 29, 32],
        [14, 17, 29, 32, 35],
        [0, 4, 8, 27, 31],
        [4, 8, 27, 31, 35],
        [11, 13, 15, 20, 22],
        [13, 15, 20, 22, 24],
        [10, 12, 8, 19, 21],
        [14, 16, 27, 23, 25],
        [3, 7, 20, 30, 34],
        [1, 5, 15, 28, 32]
    ]

    private cwRotationIndexes:number[] = [6, 3, 0, 7, 4, 1, 8, 5, 2];
    private ccwRotationIndexes:number[] = [2, 5, 8, 1, 4, 7, 0, 3, 6];

    constructor() { 
        for (let cell=1; cell<37; cell++) {
            this._squares.push(null)
        }
    }

    resetGame() {
        return new Promise((resolve, reject) => {
            for (let i=0; i<this._squares.length; i++) {
                this._squares[i] = null;
            }
            this._player = 'X';
            this._winner = null;
        });        
    }

    newMove(cell, sheet) {
        return new Promise((resolve, reject) => {
            if (this._winner === null && this._squares[cell + 9*sheet]===null) {
                this._squares[cell + 9*sheet] = this._player;
                this._player = this._player == 'X' ? 'O' : 'X';
                this._canRotate = true;
                this._winner = this.checkWinner();
                console.log(this._winner);
            }
            resolve(this._winner);
        })        
    }

    rotateSheet(sheet, direction) {
        return new Promise((resolve, reject) => {
            if (this._canRotate === false)
                return;

            let oldSquares = this._squares.slice();
            this._canRotate = false;
            if (direction === "CW") {
                for (let i=0; i<9; i++) {
                    this._squares[9*sheet + i] = oldSquares[9*sheet + this.cwRotationIndexes[i]];
                }
            } 
            else {
                for (let i=0; i<9; i++) {
                    this._squares[9*sheet + i] = oldSquares[9*sheet + this.ccwRotationIndexes[i]];
                }
            }
        })
    }

    checkWinner() {
        for (let i=0; i<this.winIndexes.length; i++) {
            if ( 
                this._squares[ this.winIndexes[i][0] ] != null &&
                this._squares[ this.winIndexes[i][0] ] === this._squares[ this.winIndexes[i][1] ] &&
                this._squares[ this.winIndexes[i][1] ] === this._squares[ this.winIndexes[i][2] ] &&
                this._squares[ this.winIndexes[i][2] ] === this._squares[ this.winIndexes[i][3] ] &&
                this._squares[ this.winIndexes[i][3] ] === this._squares[ this.winIndexes[i][4] ] 
            ) {
                return this._squares[ this.winIndexes[i][0] ];
            }
        }
        return null;
    }

    get player() {
        return this._player;
    }

    get squares() {
        return this._squares;
    }

    get hostPiece() {
        return this._hostPiece;
    }

    get guestPiece() {
        return this._guestPiece;
    }


}
