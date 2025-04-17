import { Scene } from "phaser";
import { SCENE_KEYS, GAME_WIDTH, GAME_HEIGHT } from "../utils/consts";

export class MainMenu extends Scene {
  constructor() {
    super(SCENE_KEYS.MainMenu);
  }

  create() {
    // Placeholder code
    this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, "background");
    this.add.image(GAME_WIDTH / 2, GAME_HEIGHT / 2, "logo").setDepth(10);
  }
}
