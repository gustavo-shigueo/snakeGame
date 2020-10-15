class Snake{
  constructor(){
    this.x = 10 * grid
    this.y = 10 * grid
    
    this.dir = [1, 0]
    
    this.tail = [
      [this.x, this.y],
      [this.x, this.y]
    ]
  }
  
  update(){
    this.tail.unshift([this.x, this.y])
    this.tail.splice(-1)
    this.x += this.dir[0] * grid
    this.y += this.dir[1] * grid
  }

  changeDirection(xD, yD) {
    if (this.tail[0][0] === this.x + xD * grid && this.tail[0][1] === this.y + yD * grid) return
    if ((xD === 0 && this.dir[1] === 0) || (yD === 0 && this.dir[0] === 0)) {
      return this.dir = [xD, yD]
    }
  }
  
  show(){
    fill(255)
    rect(this.x, this.y, grid)
    for(const piece of this.tail) rect(piece[0], piece[1], grid)
  }
  
  eat(fObj){
    if(dist(this.x, this.y, fObj.x, fObj.y) < grid) {
      food = new Food()
      score++
      showScore()
      this.tail.push([this.tail[this.tail.length - 1]])
    }
  }
  
  death(){
    if(this.x <= -grid || this.y <= -grid || this.x >= w || this.y >= h) return true
    for(const piece of this.tail) {
      if(this.x === piece[0] && this.y === piece[1]) return true
    }
    return
  }
}