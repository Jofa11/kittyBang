class SceneLoad extends Phaser.Scene {
	constructor() {
		super('SceneLoad');
	}
	preload() {
        // load progress on scene
        this.bar = new Bar({ scene: this, x: game.config.width / 2, y: game.config.height / 2 });
		this.progText = this.add.text(
			game.config.width / 2,
			game.config.height / 2,
			'0%',
			{ color: '#ffffff', fontSize: game.config.width / 20 }
        );
        this.progText.setOrigin(0.5, 0.5);
		// load progress listener
		this.load.on('progress', this.onProgress, this);
		// load our images or sounds


		this.load.image('toggleBack', 'images/ui/toggles/1.png');
		this.load.image('sfxOff', 'images/ui/icons/sfx_off.png');
		this.load.image('sfxOn', 'images/ui/icons/sfx_on.png');
		this.load.image('musicOn', 'images/ui/icons/music_on.png');
		this.load.image('musicOff', 'images/ui/icons/music_off.png');

	}
	onProgress(value) {
        console.log(value);
        this.bar.setPercent(value);
        let per = Math.floor(value * 100);
		this.progText.setText(per + '%');
	}

	create() {
		this.scene.start('SceneTitle');
	}
}
