class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    // preload

    preload() {
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png')
        this.load.image('starfield', './assets/starfield.png')
    }
    // adding the menu
    create() {



        // place starfield
        this.starfield = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'starfield').setOrigin(0, 0);
        // this.add.text(20, 20, "Rocket Patrol Play"); // debug line 
        // green UI background
        this.add.rectangle(0, borderUISize + borderPadding, game.config.width,
            borderUISize * 2, 0x00FF00).setOrigin(0, 0);

        // white borders
        //top 
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        // bottom
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize,
            0xFFFFFF).setOrigin(0, 0);
        // left
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        // right
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height
            , 0xFFFFFF).setOrigin(0, 0);
        // add a Rocket
        this.player1Rocket = new Rocket(this, game.config.width / 2, game.config.height - borderUISize - borderPadding, 'rocket').setOrigin(0.5, 0);
    }

    // update
    update() {
        this.starfield.tilePositionX -= starSpeed;
    }
}