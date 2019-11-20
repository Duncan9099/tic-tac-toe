'use strict';

describe('square', function() {

  let square

  beforeEach(function() {
    square = new Square(0)
  })

  it('initialises as an empty string', function() {
    expect(square.status).toEqual('')
  })
})
