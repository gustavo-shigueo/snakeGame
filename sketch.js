w = 500
h = 500

const grid    = 10
let score     = 0
let highscore = 0

function setup() {
  frameRate(10)
  snake = new Snake()
  food  = new Food()
  createCanvas(w, h);
  showScore()
}

function draw() {
  background(0);
  
  snake.update()
  snake.show()
  
  food.show()
  
  snake.eat(food)
  if(snake.death()) {
    noLoop()
    gameOver()
  }
}

function keyPressed(){
  if(keyCode === UP_ARROW) {
    snake.changeDirection(0, -1)
    return
  }
  if(keyCode === LEFT_ARROW) {
    snake.changeDirection(-1, 0)
    return
  }
  if(keyCode === DOWN_ARROW) {
    snake.changeDirection(0, 1)
    return
  }
  if(keyCode === RIGHT_ARROW) {
    snake.changeDirection(1, 0)
    return
  }
}