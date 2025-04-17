import { Scene } from "phaser";
import { SCENE_KEYS } from "../utils/consts";

export class Preloader extends Scene {
  constructor() {
    super(SCENE_KEYS.Preloader);
  }

  preload() {
    this.load.setPath("assets"); // Sets the load path to public/assets
    this.load.pack("main-pack", "pack.json"); // Load the files from pack.json
  }

  create() {
    this.scene.start(SCENE_KEYS.MainMenu); // Goes to the main menu after preloading
  }
}
