function isColliding(newItem, prevItem) {
    const TRESHOLD = 32;

    return ((newItem.x < prevItem.x + prevItem.w + TRESHOLD) &&
        (newItem.y < prevItem.y + prevItem.h + TRESHOLD) &&
        (newItem.x + newItem.w + TRESHOLD > prevItem.x) &&
        (newItem.y + newItem.h + TRESHOLD > prevItem.y))
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
        this.itemPoints = []

        this.ediblePotatos = []
        this.poisonousPotatos = []
        this.surpriseItem = []
    }
    createPotato() {

        for (let i = 0; i < 10; i++) {
            let point = findRandomPlace(this.gameScreen);

            if (this.itemPoints.length >= 1) {
                this.itemPoints.forEach((item) => {

                    while (isColliding({ x: point.left, y: point.top, w: this.width, h: this.height }, item)) {
                        point = findRandomPlace(this.gameScreen, this.left, this.top);
                    }
                })
            }
            this.itemPoints.push({ x: point.left, y: point.top, w: this.width, h: this.height, type: 'potato' })
        }


        // extract to renderpotatoo method
        this.itemPoints.forEach(item => {
            if (item.type !== 'potato') return;
            const renderPotato = document.createElement('img')

            renderPotato.src = 'images/potato.png'
            renderPotato.style.width = `${item.w}px`
            renderPotato.style.height = `${item.h}px`
            renderPotato.style.top = `${item.y}px`
            renderPotato.style.left = `${item.x}px`
            renderPotato.style.position = 'absolute'
            this.ediblePotatos.push(renderPotato)
            this.gameScreen.appendChild(renderPotato);
        })


        for (let i = 0; i < 20; i++) {
            let point = findRandomPlace(this.gameScreen);

            this.itemPoints.forEach((item) => {

                while (isColliding({ x: point.left, y: point.top, w: this.width, h: this.height }, item)) {
                    point = findRandomPlace(this.gameScreen, this.left, this.top);
                }
            })

            this.itemPoints.push({ x: point.left, y: point.top, w: this.width, h: this.height, type: 'poison' })
        }

        this.itemPoints.forEach(item => {
            if (item.type !== 'poison') return;
            const renderPoison = document.createElement('img')

            renderPoison.src = 'images/poisonous-potato.png'
            renderPoison.style.width = `${item.w}px`
            renderPoison.style.height = `${item.h}px`
            renderPoison.style.top = `${item.y}px`
            renderPoison.style.left = `${item.x}px`
            renderPoison.style.position = 'absolute'

            this.poisonousPotatos.push(renderPoison)
            this.gameScreen.appendChild(renderPoison);
        })

        for (let i = 0; i < 3; i++) {
            let point = findRandomPlace(this.gameScreen);

                this.itemPoints.forEach((item) => {

                    while (isColliding({ x: point.left, y: point.top, w: this.width, h: this.height }, item)) {
                        point = findRandomPlace(this.gameScreen, this.left, this.top);
                    }
                })
            
            this.itemPoints.push({ x: point.left, y: point.top, w: this.width, h: this.height, type: 'surprise' })
        }


        // extract to renderpotatoo method
        this.itemPoints.forEach(item => {
            if (item.type !== 'surprise') return;
            const surpriseItem = document.createElement('img')

            surpriseItem.src = 'images/flower.gif'
            surpriseItem.style.width = `${item.w}px`
            surpriseItem.style.height = `${item.h}px`
            surpriseItem.style.top = `${item.y}px`
            surpriseItem.style.left = `${item.x}px`
            surpriseItem.style.position = 'absolute'

            surpriseItem.style.border = 'solid 1px red';
            this.surpriseItem.push(surpriseItem)
            this.gameScreen.appendChild(surpriseItem);
        })
    }
}