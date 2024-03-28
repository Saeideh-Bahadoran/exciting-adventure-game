

class Game {
    constructor() {
        this.gameIntro = document.getElementById('game-intro')
        this.gameScreen = document.getElementById('game-screen')
        this.endScreen = document.getElementById('game-end')
        this.gameContainer = document.getElementById('game-container')
        this.tabelBodyOfBestScores = document.getElementById("bestScoresTableBody")
        this.currentFrame = 0
        this.lives = 3
        this.score = 0
        this.pickedPotato = 0
        this.gameOver = false
        this.scores = []
        this.winAudio = new Audio("/sounds/win.wav")
        this.pickPotatoAudio = new Audio("/sounds/pick-potato.mp3")
        this.poisyAudio = new Audio("/sounds/pick-poisonous-potato.mp3")
        this.loseAudio = new Audio("/sounds/game-over.mp3")



    }

    start() {
        // this.winAudio.pause();
        // this.winAudio.currentTime = 0;

        this.gameIntro.style.display = 'none'
        this.gameContainer.style.display = 'block'
        this.gameScreen.style.display = 'block'
        this.endScreen.style.display = 'none'

        this.player = new Player(this.gameScreen)
        this.potatos = new Potato(this.gameScreen)

        this.play()
    }

    play() {
        this.winAudio.pause();
        this.winAudio.currentTime = 0;

        this.potatos.createPotato();

        this.intervalId = setInterval(() => {
            this.player.render();
            this.score += this.currentFrame % 60 === 0 ? 1 : 0;

            this.potatos.ediblePotatos.forEach(currentPotato => {
                if (this.player.didCollideWithPotato(currentPotato)) {
                    this.pickPotatoAudio.play();
                    this.pickedPotato += 1;
                    currentPotato.remove();
                    if (this.pickedPotato >= 5) {
                        this.winAudio.play();
                        this.goToEndScreen();
                    }


                }
            })

            this.potatos.poisonousPotatos.forEach(currentPotato => {
                if (this.player.didCollideWithPoisonousPotato(currentPotato)) {
                    this.poisyAudio.play();

                    this.lives -= 1
                    currentPotato.remove();

                    if (this.lives <= 0) {
                        this.gameOver = true
                        this.loseAudio.play()
                        this.goToEndScreen();

                    }
                }

            })

            document.getElementById('score').innerText = this.score
            document.getElementById('lives').innerText = this.lives
            document.getElementById('potatos').innerText = this.pickedPotato

            this.currentFrame += 1;

        }, 1000 / 60)
    }
    goToEndScreen() {

        let playerScores = []

        if (!this.gameOver) {
            if (localStorage) {


                const scoresFromLocalStorage = JSON.parse(localStorage.getItem("scores")) || {
                    current: 0,
                    previous: []
                };
                playerScores.push(this.score)
                scoresFromLocalStorage.current = this.score
                scoresFromLocalStorage.previous.push(this.score)
                //finding the five best Scores(5 lowest time)
                scoresFromLocalStorage.previous.sort(function (a, b) { return b - a })// sorting from hight to low
                // scoresFromLocalStorage.previous.filter((value, index) => .index)
                const uniqueArray = scoresFromLocalStorage.previous.filter((element, index) => {
                    return scoresFromLocalStorage.previous.indexOf(element) === index;
                });
                console.log("uniqueArray.length", uniqueArray.length)
                const newArr = uniqueArray.slice(-5);
                console.log("newArr", newArr)
                // const tbl = document.createElement("table");
                // const tblBody = document.createElement("tbody");
                this.tabelBodyOfBestScores.innerHTML = '';
                newArr.sort((a, b) => a - b).map((item, index) => {

                    index += 1;

                    const row = document.createElement("tr");

                    for (let j = 1; j <= 2; j++) {
                        const cell = document.createElement("td");
                        let cellText
                        if (j === 1) {
                            cellText = document.createTextNode(` ${index}.`);

                        }
                        else {
                            cellText = document.createTextNode(`    ${item}   second`);
                        }
                        cell.appendChild(cellText);
                        row.appendChild(cell);
                        //tblBody.appendChild(tabelOfBestScores)
                    }
                    console.log(row)
                    this.tabelBodyOfBestScores.appendChild(row)
                    // tbl.appendChild(tblBody)
                    // document.body.appendChild(tbl)
                    // tbl.setAttribute("border", "2");
                })


                document.getElementById('tryAgain').style.display = 'none'
                document.getElementById('best-score-table').style.display = 'block'
                document.getElementById('bestScoresTableBody').style.display = 'block'
                document.getElementById('playerFinalScore').style.display = 'block'
                // this.tabelOfBestScores.style.display = 'block'
                //document.getElementById("playerLastScores").innerText = "Your last scores : " + uniqueArray
                localStorage.setItem("scores", JSON.stringify(scoresFromLocalStorage));
            }


            document.getElementById('showResult').innerText = 'You Win!'
            document.getElementById('showResult').style.backgroundColor = '#228267'
            document.getElementById('playerFinalScore').innerText = 'Your Time: ' + this.score + ' second'

        }
        else {
            document.getElementById('tryAgain').style.display = 'block'
            document.getElementById('best-score-table').style.display = 'none'
            document.getElementById('playerFinalScore').style.display = 'none'
            this.tabelBodyOfBestScores.style.display = 'none'

            document.getElementById('showResult').innerText = 'Game Over!'
            document.getElementById('showResult').style.backgroundColor = '#a33939'



        }

        this.player.element.remove()
        this.potatos.poisonousPotatos.forEach(currentPotato => {
            currentPotato.remove()
        })
        this.potatos.ediblePotatos.forEach(currentPotato => {
            currentPotato.remove()
        })
        this.gameContainer.style.display = 'none'
        this.gameScreen.style.display = 'none'
        this.endScreen.style.display = 'flex'

        document.getElementById('showResult').style.left = '200px'
        document.getElementById('showResult').style.top = '140px'
        document.getElementById('restart-button').style.top = '500px'
        document.getElementById('restart-button').style.left = '350px'
        clearInterval(this.intervalId)
    }


}