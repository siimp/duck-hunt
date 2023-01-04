function renderGame(tick) {
    drawBird(tick);
    drawSprite('dog.png', CONTEXT.game.dog.x, CONTEXT.game.dog.y);
}

let animationFrame = 1;
function drawBird(tick) {
    let sprite = CONTEXT.game.bird.state.toLowerCase();
    drawSprite(`${sprite}_${animationFrame}.png`, CONTEXT.game.bird.x, CONTEXT.game.bird.y);
    
    if (tick % 10 === 0) {
        animationFrame = ++animationFrame % 3 + 1;
    }
}

function drawSprite(spriteName, x, y) {
    const s = CONTEXT.spritesheetData[spriteName]

    if (!s) {
        throw new Error(`sprite ${spriteName} not found`);
    }

    CONTEXT.ctx.drawImage(CONTEXT.spritesheet, s.x, s.y, s.w, s.h, x + s.cx, y + s.cy, SPRITE_SCALE, SPRITE_SCALE);
}