class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    // adding the menu
    create() {
        this.add.text(20, 20, "Rocket Patrol Menu");
        // change scenes
        this.scene.start("playScene")
    }
}