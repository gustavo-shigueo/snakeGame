class Food{
  constructor(){
    this.x = floor(random(0, w) / grid)  * grid
    this.y = floor(random(0, h) / grid) * grid
  }
  
  show(){
    fill(255, 40, 40)
    rect(this.x, this.y, grid)
  }
}