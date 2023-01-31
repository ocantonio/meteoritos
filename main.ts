controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bala = sprites.createProjectileFromSprite(assets.image`bala`, Nave, 200, 0)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
let meteorito: Sprite = null
let bala: Sprite = null
let Nave: Sprite = null
Nave = sprites.create(assets.image`Nave`, SpriteKind.Player)
Nave.setStayInScreen(true)
controller.moveSprite(Nave, 200, 200)
info.setLife(3)
info.setScore(0)
game.onUpdateInterval(1000, function () {
    meteorito = sprites.create(assets.image`meterito`, SpriteKind.Enemy)
    meteorito.setVelocity(-80, 0)
    meteorito.setPosition(160, randint(0, 100))
})
