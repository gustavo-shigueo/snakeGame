const swiper = new Swipe(document)

swiper.onUp(function() {
    snake.changeDirection('ArrowUp')
})

swiper.onLeft(function() {
    snake.changeDirection('ArrowLeft')
})

swiper.onDown(function() {
    snake.changeDirection('ArrowDown')
})

swiper.onRight(function() {
    snake.changeDirection('ArrowRight')
})

swiper.run()