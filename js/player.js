class Player{
    constructor(gameScreen) {
        this.gameScreen = gameScreen
        this.width = 70
        this.height = 120
        this.top = this.gameScreen.clientHeight/2 - this.height
        this.left = 5
        this.directionX = 0
        this.directionY = 0
        this.speed = 3
        this.element = document.createElement('img')
        this.element.src = '../images/player.png'
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.top = `${this.top}px`
        this.element.style.left = `${this.left}px`
        this.element.style.position = 'absolute'
        this.gameScreen.appendChild(this.element)
      }

      render() {
        this.move()
        this.element.style.top = `${this.top}px`
        this.element.style.left = `${this.left}px`
      }

      move() {
        console.log(`top = ${this.top}`)
        console.log(`left = ${this.left}`)
        if (this.top >= 94 && this.top <= this.gameScreen.clientHeight - this.height-20) {
          this.top += this.directionY
        }
        if (this.top <= 0) {
          this.top = 97
        }
        if (this.top >= this.gameScreen.clientHeight - this.height) {
          this.top = this.gameScreen.clientHeight - this.height - 25
        }
    
        if (this.left >= 0 && this.left <= this.gameScreen.clientWidth - this.width) {
          this.left += this.directionX
        }
        if (this.left <= 0) {
          this.left = 0
        }
        if (this.left >= this.gameScreen.clientWidth - this.width ) {
          this.left = this.gameScreen.clientWidth - this.width 
        }
      }
        

}