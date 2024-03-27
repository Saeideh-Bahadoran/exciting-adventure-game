

class Player {
  constructor(gameScreen) {
    this.gameScreen = gameScreen
    this.width = 70
    this.height = 120
    this.top = this.gameScreen.clientHeight / 2 - this.height
    this.left = 5
    this.directionX = 0
    this.directionY = 0
    this.speed = 3
    this.element = document.createElement('img')
    this.element.src = 'images/player.png'
    this.element.style.width = `${this.width}px`
    this.element.style.height = `${this.height}px`
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`
    this.element.style.position = 'absolute'
    this.element.style.zIndex = '1'
    this.gameScreen.appendChild(this.element)
  }

  render() {
    this.move()
    this.element.style.top = `${this.top}px`
    this.element.style.left = `${this.left}px`
  }

  move() {
    // console.log(`top = ${this.top}`)
    // console.log(`left = ${this.left}`)
    if (this.top >= 100 && this.top <= this.gameScreen.clientHeight) {
      this.top += this.directionY
    }
    if (this.top <= 100) {
      this.top = 100
    }
    if (this.top >= this.gameScreen.clientHeight - this.height - 80) {
      this.top = this.gameScreen.clientHeight - this.height - 80
    }

    if (this.left >= 0 && this.left <= this.gameScreen.clientWidth - this.width) {
      this.left += this.directionX
    }
    if (this.left <= 0) {
      this.left = 0
    }
    if (this.left >= this.gameScreen.clientWidth - this.width) {
      this.left = this.gameScreen.clientWidth - this.width
    }
  }
  didCollideWithPotato(potato) {
    const playerRect = this.element.getBoundingClientRect()
    const potatoRect = potato.getBoundingClientRect()
    const collisionRectObj={
      left:playerRect.left +10 ,
      right:playerRect.right -10,
      top:playerRect.top + 120,
      botton:playerRect.bottom
    }

    return (
      collisionRectObj.left < potatoRect.right &&
      collisionRectObj.right > potatoRect.left &&
      collisionRectObj.top < potatoRect.bottom &&
      collisionRectObj.botton > potatoRect.top
    )
  }
  didCollideWithPoisonousPotato(potato) {
    const playerRect = this.element.getBoundingClientRect()
    const potatoRect = potato.getBoundingClientRect()

  //   return (
  //     playerRect.left + this.width/2 < potatoRect.right &&
  //     playerRect.right - this.width/2 > potatoRect.left &&
  //     playerRect.top + this.height < potatoRect.bottom &&
  //     playerRect.bottom > potatoRect.top
  //   )
  // }
  const collisionRectObj={
    left:playerRect.left +10 ,
    right:playerRect.right -10,
    top:playerRect.top + 120,
    botton:playerRect.bottom
  }

  return (
    collisionRectObj.left < potatoRect.right &&
    collisionRectObj.right > potatoRect.left &&
    collisionRectObj.top < potatoRect.bottom &&
    collisionRectObj.botton > potatoRect.top
  )
}



}
        

