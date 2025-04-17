import { Preloader } from "./scenes/Preloader";
import { MainMenu } from "./scenes/MainMenu";
import { AUTO, Scale, Game } from "phaser";

const config = {
  type: AUTO,
  width: 1280,
  height: 720,
  parent: "game-container",
  backgroundColor: "#000000",
  scale: {
    mode: Scale.FIT,
    autoCenter: Scale.CENTER_BOTH,
  },
  scene: [Preloader, MainMenu],
};

export default new Game(config);
