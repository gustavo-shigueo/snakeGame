class Swipe{
    constructor(element) {
        this.xDown = null
        this.yDown = null

        this.element = typeof(element) === 'string' ? document.querySelector(element) : element

        this.element.addEventListener('touchstart', function(event) {
            this.xDown = event.touches[0].clientX
            this.yDown = event.touches[0].clientY
        }.bind(this), false)
    }

    onUp(callback) {
        this.onUp = callback
        return this
    }

    onLeft(callback) {
        this.onLeft = callback
        return this
    }

    onDown(callback) {
        this.onDown = callback
        return this
    }

    onRight(callback) {
        this.onRight = callback
        return this
    }

    handleTouchMove(event) {
        if (!this.xDown || !this.yDown) return

        let xUp = event.touches[0].clientX
        let yUp = event.touches[0].clientY

        this.xDiff = this.xDown - xUp
        this.yDiff = this.yDown - yUp

        if (Math.abs(this.xDiff) > Math.abs(this.yDiff)) this.xDiff > 0 ? this.onLeft() : this.onRight()
        else this.yDiff > 0 ? this.onUp() : this.onDown()

        this.xDown = null
        this.yDown = null
    }

    run() {
        this.element.addEventListener('touchmove', function(event) {
            this.handleTouchMove(event).bind(this)
        }.bind(this), false)
    }
}