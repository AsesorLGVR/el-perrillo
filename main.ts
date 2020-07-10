namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    game.over(true, effects.smiles)
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.follow()
myCorg.bark()
tiles.setTilemap(tiles.createTilemap(
            hex`1400080000000000000000000000000000000000000004020000000000000000000000000000000202020200000000000000000000000000000002020000000005000000000000000002000000020202000000000202000700000002020000020002000000000000020202020200000002020202020200000000000006000000000002000000000002020000000000000202020202020202020202020202000000000000`,
            img`
. . . . . . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . 2 2 2 2 . 
. . . . . . . . . . . . . . 2 2 . . . . 
. . . . . . . . . 2 . . . 2 2 2 . . . . 
2 2 . 2 . . . 2 2 . . 2 . 2 . . . . . . 
2 2 2 2 2 . . . 2 2 2 2 2 2 . . . . . . 
. . . . . . 2 . . . . . 2 2 . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.builtin.brick,sprites.builtin.crowd9,sprites.builtin.forestTiles0,sprites.dungeon.stairLarge,sprites.castle.rock0,sprites.castle.shrub],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(myCorg.sprite, sprites.dungeon.stairLarge)
