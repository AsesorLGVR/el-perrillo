scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    info.changeScoreBy(1)
    music.baDing.play()
    game.showLongText("to do", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    game.over(true, effects.slash)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, sprites.dungeon.stairLadder)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    info.changeScoreBy(1)
    music.baDing.play()
    game.showLongText("to can", DialogLayout.Bottom)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd1, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, sprites.dungeon.stairNorth)
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.follow()
myCorg.bark()
tiles.setTilemap(tiles.createTilemap(hex`140008000000000000000000000000000000000000000201000000000000000000000000000000010101010c00000000000000000000000000000101000000000300000c000000000001000700010101000b0b0b0101000500000001010000010c010a000000000001010101010000000101010101010b0b0b0b0b0004080c00000001000000000c01010000000000000101010101010101010101010101090000000006`, img`
    . . . . . . . . . . . . . . . . . . . 2 
    . . . . . . . . . . . . . . . 2 2 2 2 . 
    . . . . . . . . . . . . . . 2 2 . . . . 
    . . . . . . . . . 2 . . . 2 2 2 . 2 2 2 
    2 2 . 2 . . . 2 2 . . 2 . 2 . . . . . . 
    2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 . 
    . . . . . . 2 . . . . . 2 2 . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 
    `, [myTiles.tile0,sprites.builtin.brick,sprites.builtin.forestTiles0,sprites.dungeon.stairLarge,sprites.castle.rock0,sprites.castle.shrub,sprites.dungeon.stairLadder,sprites.dungeon.purpleSwitchUp,sprites.dungeon.stairNorth,sprites.builtin.crowd1,myTiles.tile1,sprites.castle.tilePath9,myTiles.tile2], TileScale.Sixteen))
tiles.placeOnRandomTile(myCorg.sprite, sprites.dungeon.stairLarge)
info.setScore(0)
info.startCountdown(180)
game.showLongText("to can", DialogLayout.Full)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f e e e e e f . . . . 
    . . . . . f e f e f e f . . . . 
    . . . . . e e e e e e e . . . . 
    . . . . . . e e f e e . . . . . 
    . . . . . . . e e e . . . . . . 
    . . . . . . . 1 f 1 . . . . . . 
    . . f e e 1 1 1 1 1 1 1 e e e f 
    . . . . . . 1 1 f 1 1 . . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . . e e e e e . . . . . 
    . . . . . . 1 1 f 1 1 . . . . . 
    . . . . . . 1 1 1 1 1 . . . . . 
    . . . . . f f f . f f f . . . . 
    `)
game.setDialogFrame(img`
    8 8 8 8 . . . . . 8 8 . . . . 8 8 8 . . . . 8 8 . 8 8 . . . . 8 8 8 . . . . 8 8 8 . . . 8 8 8 8 
    8 6 7 7 8 8 . . 8 7 6 8 . . 8 6 7 6 8 . . 8 6 7 8 7 6 8 . . 8 6 7 6 8 . . 8 6 7 8 . 8 8 7 7 6 8 
    8 7 6 7 7 6 8 . 8 7 7 7 8 8 6 7 6 7 6 8 8 7 7 7 8 7 7 7 8 8 6 7 6 7 6 8 8 7 7 7 8 8 6 7 7 6 7 8 
    8 7 7 6 7 7 6 8 6 7 6 7 7 8 7 7 6 7 7 8 7 7 6 7 6 7 6 7 7 8 7 7 6 7 7 8 7 7 6 7 8 6 7 7 6 7 7 8 
    . 8 7 7 8 7 6 6 6 7 7 6 7 8 7 7 6 7 7 8 7 6 7 7 6 7 7 6 7 8 7 7 6 7 7 8 7 6 7 7 8 6 7 8 7 7 8 . 
    . 8 6 7 7 8 6 6 8 6 7 6 6 8 6 7 6 7 6 8 6 6 7 6 8 6 7 6 6 8 6 7 6 7 6 8 6 6 7 6 6 6 8 7 7 6 8 . 
    . . 8 6 6 6 8 6 8 8 6 7 6 8 8 6 8 6 8 8 6 7 6 8 8 8 6 7 6 8 8 6 8 6 8 8 6 7 6 8 6 8 6 6 6 8 . . 
    . 8 8 8 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 8 8 . . 
    8 7 7 7 7 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 6 6 8 8 . 
    8 6 7 6 7 7 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 6 7 7 7 7 8 
    . 8 7 7 6 6 7 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 7 7 6 7 6 8 
    . . 8 7 7 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 7 6 6 7 7 8 . 
    . . 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 7 7 8 . . 
    . 8 6 7 7 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 . . 
    8 6 7 7 7 7 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 6 7 7 6 8 . 
    8 7 6 6 6 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 7 7 7 7 6 8 
    8 6 7 7 7 7 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 6 6 6 6 7 8 
    . 8 6 7 7 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 7 7 7 7 6 8 
    . . 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 6 7 7 6 8 . 
    . . 8 7 7 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 . . 
    . 8 7 7 6 6 7 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 7 7 8 . . 
    8 6 7 6 7 7 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 7 6 6 7 7 8 . 
    8 7 7 7 7 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 7 7 6 7 6 8 
    . 8 8 6 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 6 7 7 7 7 8 
    8 7 7 7 7 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 6 6 8 8 . 
    8 6 7 6 7 7 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 6 7 7 7 7 8 
    . 8 7 7 6 6 7 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 7 7 6 7 6 8 
    . . 8 7 7 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 7 6 6 7 7 8 . 
    . . 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 7 7 8 . . 
    . 8 6 7 7 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 . . 
    8 6 7 7 7 7 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 6 7 7 6 8 . 
    8 7 6 6 6 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 7 7 7 7 6 8 
    8 6 7 7 7 7 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 6 6 6 6 7 8 
    . 8 6 7 7 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 7 7 7 7 6 8 
    . . 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 6 7 7 6 8 . 
    . . 8 7 7 6 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 . . 
    . 8 7 7 6 6 7 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 7 7 8 . . 
    8 6 7 6 7 7 6 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 7 6 6 7 7 8 . 
    8 7 7 7 7 6 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 7 7 6 7 6 8 
    . 8 8 6 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 8 6 7 7 7 7 8 
    . . 8 8 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 8 8 8 . 
    . . 8 6 6 6 8 6 8 6 7 6 8 8 6 8 6 8 8 6 7 6 8 8 8 6 7 6 8 8 6 8 6 8 8 6 7 6 8 8 6 8 6 6 6 8 . . 
    . 8 6 7 7 8 6 6 6 7 6 6 8 6 7 6 7 6 8 6 6 7 6 8 6 7 6 6 8 6 7 6 7 6 8 6 6 7 6 8 6 6 8 7 7 6 8 . 
    . 8 7 7 8 7 6 8 7 7 6 7 8 7 7 6 7 7 8 7 6 7 7 6 7 7 6 7 8 7 7 6 7 7 8 7 6 7 7 6 6 6 7 8 7 7 8 . 
    8 7 7 6 7 7 6 8 7 6 7 7 8 7 7 6 7 7 8 7 7 6 7 6 7 6 7 7 8 7 7 6 7 7 8 7 7 6 7 6 8 6 7 7 6 7 7 8 
    8 7 6 7 7 6 8 8 7 7 7 8 8 6 7 6 7 6 8 8 7 7 7 8 7 7 7 8 8 6 7 6 7 6 8 8 7 7 7 8 . 8 6 7 7 6 7 8 
    8 6 7 7 8 8 . 8 7 6 8 . . 8 6 7 6 8 . . 8 6 7 8 7 6 8 . . 8 6 7 6 8 . . 8 6 7 8 . . 8 8 7 7 6 8 
    8 8 8 8 . . . 8 8 8 . . . . 8 8 8 . . . . 8 8 . 8 8 . . . . 8 8 8 . . . . 8 8 . . . . . 8 8 8 8 
    `)
