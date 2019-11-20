'use strict';

describe('Board', function() {
  let board = new Board

  beforeEach(function() {
    board = new Board
  })

  describe('chooseSquare', function() {
    it('sets the third array element to X', function() {
      board.chooseSquare(2, 'X')
      expect(board.board[2]).toEqual('X')
    })

    it('sets the second turn element to O', function() {
      board.chooseSquare(2, 'X')
      board.chooseSquare(0, 'O')
      expect(board.board[2]).toEqual('X')
      expect(board.board[0]).toEqual('O')
    })
  })
})
