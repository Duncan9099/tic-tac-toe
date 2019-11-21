class Score {
  constructor() {
    this.gameOver = false
    this.combinations = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [6,4,2]
    ]
  }

  isWon(board) {
    this.combinations.forEach((combination) => {
      if (
        board[combination[0]] === board[combination[1]]
        && board[combination[0]] === board[combination[2]]
        && board[combination[0]] !== ''
      ) {
        this.gameOver = true
      }
    })
  }

}
