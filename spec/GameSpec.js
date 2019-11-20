'use strict';

describe('Game', function() {
  let board = new Board
  let game = new Game(board)

  beforeEach(function() {
    board = new Board
    game = new Game(board)
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
});
