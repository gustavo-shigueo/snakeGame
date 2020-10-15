w = 500
h = 500

const grid = 10
let highscore = 0

const gameOverScreen = document.querySelector('.gameover-screen')
const restartBtn = document.querySelector('.gameover-btn')

function setup() {
  frameRate(10)
  snake = new Snake()
  food  = new Food()
  createCanvas(w, h);
}

function draw() {
  background(0);
  
  snake.update()
  snake.show()
  
  food.show()
  
  snake.eat(food)
  if(snake.death()) {
    noLoop()
    gameOverScreen.setAttribute('data-gameover-screen', 'show')
    highscore = max(highscore, snake.score)
  }
}

function keyPressed(){
  if(keyCode === UP_ARROW    && snake.dir[1] != 1 ) snake.dir = [0, -1]
  if(keyCode === LEFT_ARROW  && snake.dir[0] != 1 ) snake.dir = [-1, 0]
  if(keyCode === DOWN_ARROW  && snake.dir[1] != -1) snake.dir = [0, 1]
  if(keyCode === RIGHT_ARROW && snake.dir[0] != -1) snake.dir = [1, 0]
}

restartBtn.addEventListener('click', () => {
  gameOverScreen.setAttribute('data-gameover-screen', 'hide')
  loop()
  snake = new Snake()
})