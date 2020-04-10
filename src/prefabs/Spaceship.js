// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
  
        // add object to existing scene
        scene.add.existing(this);  //add to existing, displayList, updateList
        this.points = pointValue;
    }

    update() {
        // move spaceship left
        this.x -= 3;
        // wraparound screen bounds
        if (this.x <= 0 - this.width) {
            this.x = game.config.width;
        }
    }
}