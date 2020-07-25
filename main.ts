scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    game.over(true, effects.smiles)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    tiles.placeOnRandomTile(sprite, sprites.dungeon.stairLadder)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    tiles.setTileAt(location, myTiles.transparency16)
    info.changeScoreBy(1)
    music.baDing.play()
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
tiles.setTilemap(tiles.createTilemap(hex`140008000000000000000000000000000000000000000201000000000000000000000000000000010101010000000000000000000007000000000101000000000300000b000000000001000800010101000c0c0c01010005000000010100000100010b000000000001010101010000000101010101010c0c0c0c0c00040900000000010000000000010100000000000001010101010101010101010101010a0000000006`, img`
    . . . . . . . . . . . . . . . . . . . 2 
    . . . . . . . . . . . . . . . 2 2 2 2 . 
    . . . . . . . . . . . . . . 2 2 . . . . 
    . . . . . . . . . 2 . . . 2 2 2 . 2 2 2 
    2 2 . 2 . . . 2 2 . . 2 . 2 . . . . . . 
    2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 . 
    . . . . . . 2 . . . . . 2 2 . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . 2 
    `, [myTiles.tile0,sprites.builtin.brick,sprites.builtin.forestTiles0,sprites.dungeon.stairLarge,sprites.castle.rock0,sprites.castle.shrub,sprites.dungeon.stairLadder,myTiles.transparency16,sprites.dungeon.purpleSwitchUp,sprites.dungeon.stairNorth,sprites.builtin.crowd1,myTiles.tile1,sprites.castle.tilePath9], TileScale.Sixteen))
tiles.placeOnRandomTile(myCorg.sprite, sprites.dungeon.stairLarge)
info.setScore(0)
