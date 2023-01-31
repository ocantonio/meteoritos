controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bala = sprites.createProjectileFromSprite(assets.image`bala`, Nave, 200, 0)
})
let meteorito: Sprite = null
let bala: Sprite = null
let Nave: Sprite = null
Nave = sprites.create(assets.image`Nave`, SpriteKind.Player)
Nave.setStayInScreen(true)
controller.moveSprite(Nave, 200, 200)
game.onUpdateInterval(1000, function () {
    meteorito = sprites.create(assets.image`meterito`, SpriteKind.Enemy)
})
