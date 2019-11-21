'use strict';

describe('Game', function() {
  let board = new Board
  let score = new Score
  let game = new Game(board, score)

  beforeEach(function() {
    board = new Board
    score = new Score
    game = new Game(board, score)
  })

  describe('takeTurn', function() {
    it('turn chooses X on 0 square', function() {
      game.takeTurn(0)
      expect(game.board.board[0]).toEqual('X')
    })

    it('turn chooses X on 0 square', function() {
      game.takeTurn(0)
      game.takeTurn(3)
      expect(game.board.board[0]).toEqual('X')
    })

    it('cannot choose the same square twice', function() {
      game.takeTurn(0)
      expect(game.takeTurn(0)).toEqual(false)
      expect(game.board.board[0]).toEqual('X')
    })

    it('cannot choose the a square outside the grid', function() {
      expect(game.takeTurn(12)).toEqual(false)
    })
  })

  describe('isGameOver', function() {
    it('sets a completed game to gameover', function() {
      game.takeTurn(0)
      game.takeTurn(8)
      game.takeTurn(1)
      game.takeTurn(7)
      game.takeTurn(2)
      expect(game.score.gameOver).toEqual(true)
      expect(game.takeTurn(5)).toEqual(false)
    })
  })
});
