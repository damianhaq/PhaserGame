var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image("tiles", "BigSpritev7.png");
  this.load.tilemapTiledJSON("map", "map.json");
}

function create() {
  const map = this.make.tilemap({ key: "map", tileWidth: 16, tileHeight: 16 });
  const tileset = map.addTilesetImage("tiles1", "tiles");
  const layer = map.createLayer("topLayer0", tileset, 0, 0);
}

function update() {}
