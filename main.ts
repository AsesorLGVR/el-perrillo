scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    music.wawawawaa.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    game.over(true, effects.smiles)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, sprites.dungeon.stairLadder)
    music.wawawawaa.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd1, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, sprites.dungeon.stairNorth)
    music.wawawawaa.play()
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.follow()
myCorg.bark()
tiles.setTilemap(tiles.createTilemap(hex`14000800000000000000000000000000000000000000020100000000000000000000000000000001010101000000000000000000000700000000010100000000030000000000000000010008000101010000000001010005000000010100000100010000000000000101010101000000010101010101000000000000040900000000010000000000010100000000000001010101010101010101010101010a0000000006`, img`
    . . . . . . . . . . . . . . . . . . . 2 
    . . . . . . . . . . . . . . . 2 2 2 2 . 
    . . . . . . . . . . . . . . 2 2 . . . . 
    . . . . . . . . . 2 . . . 2 2 2 . . . . 
    2 2 . 2 . . . 2 2 . . 2 . 2 . . . . . . 
    2 2 2 2 2 . . . 2 2 2 2 2 2 . . . . . . 
    . . . . . . 2 . . . . . 2 2 . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 
    `, [myTiles.tile0,sprites.builtin.brick,sprites.builtin.forestTiles0,sprites.dungeon.stairLarge,sprites.castle.rock0,sprites.castle.shrub,sprites.dungeon.stairLadder,myTiles.transparency16,sprites.dungeon.purpleSwitchUp,sprites.dungeon.stairNorth,sprites.builtin.crowd1], TileScale.Sixteen))
tiles.placeOnRandomTile(myCorg.sprite, sprites.dungeon.stairLarge)
