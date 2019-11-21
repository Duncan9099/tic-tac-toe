'use strict';

class Game {
  constructor(board) {
    this.board = board
    this.player = 'X'
  }

  takeTurn(id) {
    if (this._isTurnBanned(id)) {
      return false
    } else {
      this.board.chooseSquare(id, this.checkPlayer())
      this.changePlayer()
    }
  }

  checkPlayer() {
    return (this.player === 'X' ? 'X' : 'O')
  }

  changePlayer() {
    this.player === 'X' ? this.player = 'O' : this.player = 'X'
  }

  _isTurnBanned(id) {
    if (id > 8 || id < 0) {
      return true
    } else if (this.board.board[id].length === 1) {
      return true
    } else {
      return false
    }
  }
}
