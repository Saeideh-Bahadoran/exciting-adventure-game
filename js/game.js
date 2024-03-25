

class Game {
    constructor(){
    this.gameIntro = document.getElementById('game-intro')
    this.gameScreen = document.getElementById('game-screen')
    this.gameContainer = document.getElementById('game-container')

    //this.endScreen = document.getElementById('game-end')
    this.width = 150
    this.height = 100
    //this.potato = []
    this.intervalId
    this.currentFrame = 0
    this.lives = 3
    this.score = 0
    this.gameOver = false
    }

    start() {
        this.gameIntro.style.display = 'none'
        this.gameContainer.style.display = 'block'
        this.gameScreen.style.display = 'block'
        console.log(this.gameScreen.style.display)
        //this.endScreen.style.display = 'none'
        //  this.gameScreen.style.width = `${this.width}%`
        //  this.gameScreen.style.height = `${this.height}%`
    
        this.player = new Player(this.gameScreen)
        // this.obstacles.push(new Obstacle(this.gameScreen))
         this.play()
      }


      play(){
        this.intervalId = setInterval(() => {
            console.log('is playing')


        this.player.render();

    }, 1000 / 60)

      }
    
    
}