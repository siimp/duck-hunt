const BIRD_FLYING_STATES = [
    BirdState.UP,
    BirdState.LEFT,
    BirdState.RIGHT,
    BirdState.UP_LEFT,
    BirdState.UP_RIGHT
];

const BIRD_FLYING_SPEED = 2;

function updateGameLogic(tick) {
    if (CONTEXT.game.state === GameState.STOPPED) {
        return;
    } 
    
    if (CONTEXT.game.state === GameState.START) {
        startGame();
    } else if (CONTEXT.game.state === GameState.BIRD_ESCAPED) {
        stopGame();
        setTimeout(() => {
            startGame();
        }, Math.random() * 5000);
    }

    if (CONTEXT.game.state === GameState.BIRD_FLYING) {
        if (tick === 0 && Math.random() > 0.5) {
            const newState = BIRD_FLYING_STATES[Math.floor(Math.random() * 5)];
            if (newState !== CONTEXT.game.bird.state) {
                playAudio('../audio/duck-flapping.mp3', false);
                CONTEXT.game.bird.state = newState;
            }
        }
        
        moveBird();
        checkEscape();
    }
}

function startGame() {
    CONTEXT.game.bird.state = BirdState.UP;
    CONTEXT.game.bird.y = CONTEXT.game.worldHeight;
    CONTEXT.game.bird.x = Math.random() * CONTEXT.game.worldWidth;
    CONTEXT.game.state = GameState.BIRD_FLYING;
    playAudio('../audio/duck-quack.mp3');
}

function stopGame() {
    CONTEXT.game.state = GameState.STOPPED;
    CONTEXT.game.bird.state = BirdState.HIDDEN;
    CONTEXT.game.dog.state = DogState.HIDDEN;
    playAudio('../audio/laugh.mp3');
}

function moveBird() {
    if (CONTEXT.game.bird.state === BirdState.UP) {
        CONTEXT.game.bird.y-=BIRD_FLYING_SPEED;
    } else if (CONTEXT.game.bird.state === BirdState.LEFT) {
        CONTEXT.game.bird.x-=BIRD_FLYING_SPEED;
    } else if (CONTEXT.game.bird.state === BirdState.RIGHT) {
        CONTEXT.game.bird.x+=BIRD_FLYING_SPEED;
    } else if (CONTEXT.game.bird.state === BirdState.UP_LEFT) {
        CONTEXT.game.bird.y-=BIRD_FLYING_SPEED;
        CONTEXT.game.bird.x-=BIRD_FLYING_SPEED;
    } else if (CONTEXT.game.bird.state === BirdState.UP_RIGHT) {
        CONTEXT.game.bird.y-=BIRD_FLYING_SPEED;
        CONTEXT.game.bird.x+=BIRD_FLYING_SPEED;
    }
}

function checkEscape() {
    if (CONTEXT.game.bird.y <= 0 || CONTEXT.game.bird.x <= 0 || CONTEXT.game.bird.x >= CONTEXT.game.worldWidth) {
        CONTEXT.game.state = GameState.BIRD_ESCAPED;
    }
}