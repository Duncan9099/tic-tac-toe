'use strict';

class Game {
  constructor(board, score) {
    this.board = board
    this.player = 'X'
    this.gameOver = false
    this.score = score
  }

  takeTurn(id) {
    if (this._isTurnBanned(id)) {
      return false
    } else {
      this.board.chooseSquare(id, this._checkPlayer())
      this._changePlayer()
    }
  }

  _checkPlayer() {
    return (this.player === 'X' ? 'X' : 'O')
  }

  _changePlayer() {
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

  isGameOver() {
    return (this.score.isWon(this.board.board) ? this.gameOver = true : false)
  }
}
