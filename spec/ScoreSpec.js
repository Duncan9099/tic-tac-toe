'use strict';

describe('score', function() {
  let score = new Score

  beforeEach(function() {
    score = new Score
  })

  describe('isWon', function() {
    it('123 X squares set isWon as true', function() {
      let board = ['X', 'X', 'X', '','','','','','']
      score.isWon(board)
      expect(score.gameOver).toEqual(true)
    })

    it('123 X squares set isWon as true', function() {
      let board = ['X', 'O', '', 'X','','O','X','','']
      score.isWon(board)
      expect(score.gameOver).toEqual(true)
    })

    it('123 X squares set isWon as true', function() {
      let board = ['O', 'X', 'X', '','O','X','X','','O']
      score.isWon(board)
      expect(score.gameOver).toEqual(true)
    })
  })
})
