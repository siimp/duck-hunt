const GameState = {
    STOPPED: 'STOPPED',
    START: 'START',
    BIRD_FLYING: 'BIRD_FLYING',
    BIRD_ESCAPED: 'BIRD_ESCAPED',
    BIRD_CAUGHT: 'BIRD_CAUGHT'
}

class Game {
    constructor(worldWidth, worldHeight) {
        this.worldWidth = worldWidth;
        this.worldHeight = worldHeight;
        this.state = GameState.STOPPED;
        this.dog = new Dog();
        this.bird = new Bird();
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
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    UP_LEFT: 'UP_LEFT',
    UP_RIGHT: 'UP_RIGHT',
    DEAD: 'DEAD'
}

class Bird extends Entity {
    constructor() {
        super();
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
        super();
        this.state = DogState.HIDDEN;
    }

}