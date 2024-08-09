import defCharacter from './domain.js';

export const character = defCharacter;

export default class Game {
    start() {
      console.log('game started');
    }
  }
  
  export class GameSavingData {
  }
  
  export function readGameSaving() {
  }
  
  export function writeGameSaving() {
  }