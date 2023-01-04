function renderGame() {
    drawSprite('left_3.png', CONTEXT.game.bird.x, CONTEXT.game.bird.y)
    drawSprite('dog.png', CONTEXT.game.dog.x, CONTEXT.game.dog.y)
}

function drawSprite(spriteName, x, y) {
    const s = CONTEXT.spritesheetData[spriteName]

    if (!s) {
        throw new Error(`sprite ${spriteName} not found`);
    }

    CONTEXT.ctx.drawImage(CONTEXT.spritesheet, s.x, s.y, s.w, s.h, x + s.cx, y + s.cy, SPRITE_SCALE, SPRITE_SCALE);
}