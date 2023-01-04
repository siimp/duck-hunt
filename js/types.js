class Game {
    constructor() {
        this.dog = new Dog();
        this.bird = new Bird();
        console.log('new game created');
    }
}

class Entity {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.state = null;
    }
}

const BirdState = {
    HIDDEN: 'HIDDEN',
    UP: 'UP',
    DOWN: 'DOWN',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    UP_LEFT: 'UP_LEFT',
    UP_RIGHT: 'UP_RIGHT',
    DEAD: 'DEAD'
}

class Bird extends Entity {
    constructor() {
        super()
        this.state = BirdState.HIDDEN;
    }
}


const DogState = {
    HIDDEN: 'HIDDEN',
    LAUGHING: 'LAUGHING',
    CAUGHT: 'CAUGHT'
}

class Dog extends Entity {

    constructor() {
        super()
        this.state = DogState.HIDDEN;
    }

}