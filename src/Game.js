'use strict';

class Game {
  constructor(board, score) {
    this.board = board
    this.player = 'X'
    this.score = score
  }

  takeTurn(id) {
    if (this._isTurnBanned(id)) {
      return false
    } else {
      this.board.chooseSquare(id, this._checkPlayer())
      this._isGameOver()
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
    } else if (this.score.gameOver === true) {
      return true
    } else {
      return false
    }
  }

  _isGameOver() {
    this.score.isWon(this.board.board)
    console.log("Game Over")
  }
}
