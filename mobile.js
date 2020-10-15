// Checks if player is in mobile browser
function detectMobile() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((item) => {
        return navigator.userAgent.match(item);
    });
};

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