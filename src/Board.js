'use strict';

class Board {
  constructor() {
    this.board = Array(9).fill('')
  }

  chooseSquare(square, turn) {
    this.board[square] = turn
  }
}
