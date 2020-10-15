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
  }
  
  update(){
    // Moves the tail
    this.tail.unshift([this.x, this.y])
    this.tail.splice(-1)
    
    // Moves the head
    this.x += this.dir[0] * grid
    this.y += this.dir[1] * grid
  }

  changeDirection(xD, yD) {
    // Prevents death by changing directions very quickly
    if (this.tail[0][0] === this.x + xD * grid && this.tail[0][1] === this.y + yD * grid) return
    
    // Prevents player from going backwards and dying
    if ((xD === 0 && this.dir[1] === 0) || (yD === 0 && this.dir[0] === 0)) {
      return this.dir = [xD, yD]
    }
  }
  
  show(){
    // Draws the snake
    fill(255)
    rect(this.x, this.y, grid)
    for(const piece of this.tail) rect(piece[0], piece[1], grid)
  }
  
  eat(fObj){
    // Checks if food and the snake's head have the same position
    if(dist(this.x, this.y, fObj.x, fObj.y) < grid) {
      food = new Food()
      score++
      showScore()

      // Increases snake tail
      this.tail.push(this.tail[0])
    }
  }
  
  death(){
    // Checks if player hit a wall
    if(this.x <= -grid || this.y <= -grid || this.x >= w || this.y >= h) return true
    
    // Checks if player hit the tail
    for(const piece of this.tail) {
      if(this.x === piece[0] && this.y === piece[1]) return true
    }
    return
  }
}