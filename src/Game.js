'use strict';

class Game {
  constructor(board) {
    this.board = board
    this.player = 'X'
  }

  checkPlayer() {
    return (this.player === 'X' ? 'X' : 'O')
  }

  changePlayer() {
    this.player === 'X' ? this.player = 'O' : this.player = 'X'
  }

  takeTurn(id) {
    if (this.board.board[id].length === 1) {
      return false
    } else {
      this.board.chooseSquare(id, this.checkPlayer())
      this.changePlayer()
    }
  }
}
