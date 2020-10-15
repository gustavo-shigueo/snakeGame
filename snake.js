class Snake{
  constructor(){
    this.x = 10 * grid
    this.y = 10 * grid
    
    this.score = 0
    
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
  
  show(){
    fill(255)
    document.getElementById('highscore').innerText = `Highscore: ${highscore}`
    document.getElementById('score').innerText = `Score: ${this.score}`
    rect(this.x, this.y, grid)
    for(let piece of this.tail) rect(piece[0], piece[1], grid)
  }
  
  eat(fObj){
    if(dist(this.x, this.y, fObj.x, fObj.y) < grid) {
      food = new Food()
      this.score++
      this.tail.push([this.tail[this.tail.length - 1]])
    }
  }
  
  death(){
    if(this.x < 0 || this.y < 0 || this.x === w || this.y === h) return true
    for(let p of this.tail) {
      if(this.x === p[0] && this.y === p[1]) return true
    }
    return
  }
}