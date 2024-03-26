

class Game {
    constructor() {
        this.gameIntro = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-screen')
        this.endScreen = document.getElementById('game-end')
        this.gameContainer = document.getElementById('game-container')

        //this.endScreen = document.getElementById('game-end')
        // this.width = 150
        // this.height = 100
        this.intervalId
        this.currentFrame = 0
        this.lives = 3
        this.score = 0
        this.pickedPotato = 0
        this.gameOver = false
    }

    start() {

        this.gameIntro.style.display = 'none'
        this.gameContainer.style.display = 'block'
        this.gameScreen.style.display = 'block'
        console.log(this.gameScreen.style.display)
        this.endScreen.style.display = 'none'
        //  this.gameScreen.style.width = `${this.width}%`
        //  this.gameScreen.style.height = `${this.height}%`

        this.player = new Player(this.gameScreen)
        this.potatos = new Potato(this.gameScreen)
        this.play()
    }

    play() {
        this.potatos.createPotato();
        this.intervalId = setInterval(() => {
            this.player.render();
            document.getElementById('score').innerText = this.score
            document.getElementById('lives').innerText = this.lives
            document.getElementById('potatoes').innerText = this.pickedPotato

            this.potatos.ediblePotatos.forEach(currentPotato => {
                if (this.player.didCollideWithPotato(currentPotato)) {
                    this.pickedPotato += 1;
                    currentPotato.remove();
                    if (this.pickedPotato >= 5) {
                        this.goToEndScreen();

                    }

                    // create sound code
                }
            })

            this.potatos.poisonousPotatos.forEach(currentPotato => {
                if (this.player.didCollideWithPoisonousPotato(currentPotato)) {
                    this.lives -= 1
                    currentPotato.remove();
                    // create sound code
                    if (this.lives <= 0) {
                        this.gameOver = true
                        this.goToEndScreen();
                        clearInterval(this.intervalId)
                    }
                }

            })

        }, 1000 / 60)
    }
    goToEndScreen() {
        if (this.gameOver == false) {
            document.getElementById('showResult').innerText = 'You Win!'
        }
        else {
            document.getElementById('showResult').innerText = 'Game Over!'
            document.getElementById('showResult').style.backgroundColor = '#a33939'
            this.player.element.remove()
            this.potatos.poisonousPotatos.forEach(currentPotato => {
                currentPotato.remove()
            })
            this.potatos.ediblePotatos.forEach(currentPotato => {
                currentPotato.remove()
            })
        }
        this.gameContainer.style.display = 'none'
        this.gameScreen.style.display = 'none'
        this.endScreen.style.display = 'block'
        document.getElementById('playerFinalScore').innerText += this.score + ' second'
        document.getElementById('showResult').style.left = '200px'
        document.getElementById('showResult').style.top = '140px'
        document.getElementById('restart-button').style.top = '500px'
        document.getElementById('restart-button').style.left = '350px'

    }


}