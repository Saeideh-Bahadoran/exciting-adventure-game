
function findRandomPlace(gameScreen, left, top) {
    const maxX = gameScreen.clientWidth - 50;
    const maxY = gameScreen.clientHeight - 200;
    left = Math.floor(Math.random() * maxX);
    if (left < 80) {
        left += 80
    }
    top = Math.floor(Math.random() * (maxY - 300) + 220);

    return { top: top, left: left };
}

class Potato {
    constructor(gameScreen) {
        this.x = 0
        this.y = 0
        this.gameScreen = gameScreen
        this.width = 25
        this.height = 25
        this.top = 0
        this.left = 0
        this.ediblePotatos = []
        this.poisonousPotatos = []
    }
    createPotato() {

        for (let i = 0; i < 10; i++) {

            const point = findRandomPlace(this.gameScreen, this.left, this.top);


            // const maxX = this.gameScreen.clientWidth - 50;
            // const maxY = this.gameScreen.clientHeight - 200;
            // this.left = Math.floor(Math.random() * maxX);
            // if (this.left < 80) {
            //     this.left += 80
            // }
            // this.top = Math.floor(Math.random() * (maxY - 300) + 220);



            this.element = document.createElement('img')

            this.element.src = 'images/potato.png'
            this.element.style.width = `${this.width}px`
            this.element.style.height = `${this.height}px`
            this.element.style.top = `${point.top}px`
            this.element.style.left = `${point.left}px`
            this.element.style.position = 'absolute'
            this.gameScreen.appendChild(this.element);
            this.ediblePotatos.push(this.element)

        }


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