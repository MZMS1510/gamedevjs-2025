import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  preload() {
    this.load.setPath("assets");
    this.load.pack("main-pack", "pack.json");
  }

  create() {
    this.scene.start("Game");
  }
}
