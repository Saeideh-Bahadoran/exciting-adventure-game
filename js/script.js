window.addEventListener('load', () => {

    const introButton = document.getElementById("intro-button")
    const startButton = document.getElementById('start-button')
    const restartButton = document.getElementById('restart-button')
    const introBox = document.getElementById('introduction')

    let game
    
    function startGame() {
      console.log('start game')
      game = new Game()
      game.start()
    }

    function showIntro(){

        if(introBox.style.display === 'block'){
        
            introBox.style.display = 'none';
        } 
        else{
          
            introBox.style.display = 'block';
        }

    }

    introButton.addEventListener('click', showIntro)
  
    startButton.addEventListener('click', function () {
      startGame()
    })

    restartButton.addEventListener('click', function () {
      startGame()
      console.log()
      // Last option in case you have problems on the restart => window.location.reload()
    })

    document.addEventListener('keydown', event => {
        if (event.code === 'ArrowUp') { // up arrow
          game.player.directionY = -game.player.speed
        }
        if (event.code === 'ArrowDown') {// down arrow
          game.player.directionY = game.player.speed
        }
        if (event.code === 'ArrowLeft') {// left arrow
          game.player.directionX = -game.player.speed
        }
        if (event.code === 'ArrowRight') { // right arrow
          game.player.directionX = game.player.speed
        }
      })
    
      document.addEventListener('keyup', event => {
        if (event.code === 'ArrowUp') {
          game.player.directionY = 0
        }
        if (event.code === 'ArrowDown') {
          game.player.directionY = 0
        }
        if (event.code === 'ArrowLeft') {
          game.player.directionX = 0
        }
        if (event.code === 'ArrowRight') {
          game.player.directionX = 0
        }
      })
    
    
})
