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
  
  if(snake.eat(food)) increaseScore()

  if(snake.death()) {
    noLoop()
    gameOver()
  }
}

function keyPressed(){
  snake.changeDirection(key)
}