import {Game, GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame, Character} from "./game.js";
const game = new Game();
game.start();
console.log('app worked');