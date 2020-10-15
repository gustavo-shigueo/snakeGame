// Handle scoreboard
const scoreCounter = document.querySelector('#score')
const highScoreCounter = document.querySelector('#highscore')

function increaseScore() {
    score++
    food = new Food    
    showScore()
    snake.increaseTail()
}

function showScore() {
    scoreCounter.innerText = `Score: ${score}`
    highScoreCounter.innerText = `Highscore: ${highscore}`
}

// Handle Game Over
const gameOverScreen = document.querySelector('.gameover-screen')
const restartBtn = document.querySelector('.gameover-btn')

restartBtn.addEventListener('click', restartGame)

function restartGame() {
    gameOverScreen.setAttribute('data-gameover-screen', 'hide')
    loop()
    snake = new Snake()
    score = 0
    showScore()
}

function gameOver() {
    gameOverScreen.setAttribute('data-gameover-screen', 'show')
    highscore = max(highscore, score)
}