const SPRITE_SCALE = 50;

let start;

function update(tick) {
    updateGameLogic(tick)
}

function draw(tick) {
    CONTEXT.ctx.clearRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height);
    renderGame(tick)
}

let tick = 0;
function animate(timestamp) {
    if (start === undefined) {
        start = timestamp
    }

    // 60 fps
    if ((timestamp - start) >= 16.6) {
        update(tick)
        draw(tick)
        start = timestamp
        tick = ++tick % 60
    }

	requestAnimationFrame(animate);
}

CONTEXT.assetsLoaded.then(() => {
    console.info("assets loaded, starting animation")
    CONTEXT.animationRequestId = requestAnimationFrame(animate);
});

document.onclick = () => {
    CONTEXT.game.state = GameState.START;
}