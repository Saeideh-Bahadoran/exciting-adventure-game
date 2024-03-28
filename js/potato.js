function isValidPlace(newItem, prevItem) {
    const TRESHOLD = 32; 

    if ((newItem.x > prevItem.x + prevItem.w + TRESHOLD) ||
        (newItem.y > prevItem.y + prevItem.h + TRESHOLD) ||
        (newItem.x + newItem.w + TRESHOLD < prevItem.x) ||
        (newItem.y + newItem.h + TRESHOLD < prevItem.y))
        return true

    return false
}

function findRandomPlace(gameScreen) {
    const maxX = gameScreen.clientWidth - 50;
    const maxY = gameScreen.clientHeight - 200;
    let left = Math.floor(Math.random() * maxX);
    if (left < 80) {
        left += 80
    }
    let top = Math.floor(Math.random() * (maxY - 300) + 220);
    return { top: top, left: left };
}

class Potato {
    constructor(gameScreen) {
        
        this.gameScreen = gameScreen
        this.width = 25
        this.height = 25
        this.top = 0
        this.left = 0
        this.potatoPoints = []
        this.ediblePotatos = []
        this.poisonousPotatos = []
    }
    createPotato() {

        for (let i = 0; i < 10; i++) {
            let point = findRandomPlace(this.gameScreen);

            if (this.potatoPoints.length >= 1) {
                this.potatoPoints.forEach((item) => {
                    
                    let counter = 0;
                    while (!isValidPlace({ x: point.left, y: point.top, w: this.width, h: this.height }, item)) {
                        
                        console.log('not valid try again', counter, point, item)
                        point = findRandomPlace(this.gameScreen, this.left, this.top);
                    }
                })
            }
            this.potatoPoints.push({ x: point.left, y: point.top, w: this.width, h: this.height })
        }


        // extract to renderpotatoo method
        this.potatoPoints.forEach(item => {
            const renderPotato = document.createElement('img')

            renderPotato.src = 'images/potato.png'
            renderPotato.style.width = `${item.w}px`
            renderPotato.style.height = `${item.h}px`
            renderPotato.style.top = `${item.y}px`
            renderPotato.style.left = `${item.x}px`
            renderPotato.style.position = 'absolute'
            renderPotato.style.padding = '16px'

            renderPotato.style.border = 'solid 1px red';
            this.ediblePotatos.push(renderPotato)
            this.gameScreen.appendChild(renderPotato);
        })


        for (let i = 0; i < 20; i++) {


            const maxX = this.gameScreen.clientWidth - 50;
            const maxY = this.gameScreen.clientHeight - 200;
            this.left = Math.floor(Math.random() * maxX);
            if (this.left < 80) {
                this.left += 80
            }
            this.top = Math.floor(Math.random() * (maxY - 300) + 220);
            this.element = document.createElement('img')

            this.element.src = 'images/poisonous-potato.png'
            this.element.style.width = `${this.width}px`
            this.element.style.height = `${this.height}px`
            this.element.style.top = `${this.top}px`
            this.element.style.left = `${this.left}px`
            this.element.style.position = 'absolute'

            this.gameScreen.appendChild(this.element)
            this.poisonousPotatos.push(this.element)

        }

    }
}