class Snake{
  constructor(){
    this.x = 10 * grid
    this.y = 10 * grid

    // Movement direction: [xDirection, yDirection]
    this.dir = [1, 0]

    // Snake starts with a size of 3 (head + 2 tail pieces)
    this.tail = [
      [this.x, this.y],
      [this.x, this.y]
    ]

    // Orientate arrow keys and direction changes
    this.directions = {
      'ArrowUp':    [ 0, -1],
      'ArrowLeft':  [-1,  0],
      'ArrowDown':  [ 0,  1],
      'ArrowRight': [ 1,  0]
    }
  }

  update(){
    // Moves the tail
    this.tail.unshift([this.x, this.y])
    this.tail.splice(-1)

    // Moves the head
    this.x += this.dir[0] * grid
    this.y += this.dir[1] * grid
  }

  changeDirection(key) {
    // Set direction acording to this.directions object
    if (!this.directions[key]) return
    const xD = this.directions[key][0]
    const yD = this.directions[key][1]

    // Prevents death by changing directions very quickly
    if (this.tail[0][0] === this.x + xD * grid && this.tail[0][1] === this.y + yD * grid) return

    // Prevents player from going backwards and dying
    if ((xD === 0 && this.dir[1] === 0) || (yD === 0 && this.dir[0] === 0)) return this.dir = [xD, yD]
  }

  show(){
    // Draws the snake
    fill(255)
    rect(this.x, this.y, grid)
    for(const piece of this.tail) rect(piece[0], piece[1], grid)
  }

  eat(fObj){
    // Checks if food and the snake's head have the same position
    if(dist(this.x, this.y, fObj.x, fObj.y) < grid) return true
    return
  }

  increaseTail(){
    // Increases snake tail
    return this.tail.push(this.tail[0])
  }

  death(){
    // Checks if player hit a wall
    if(this.x <= -grid || this.y <= -grid || this.x >= w || this.y >= h) return true

    // Checks if player hit the tail
    for(const piece of this.tail) {
      if(this.x === piece[0] && this.y === piece[1]) return true
    }

    // Player didn't die
    return
  }
}