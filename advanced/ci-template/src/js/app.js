// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export class Daemon  {
    constructor(name, type, health, level, attack, defence) {
            this.name = name;
            this.type = type;
            this.health = health;
            this.level = level;
            this.attack = attack;
            this.defence = defence;
    }
}

export const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
  }


export function orderByProps(obj, orderingList) {
    const sortedArr = Object.keys(obj).sort();
    if (orderingList) {
        for (const el of orderingList) {
            if (el in obj) {
                if (orderingList.indexOf(el) != sortedArr.indexOf(el)) {
                    sortedArr.splice(orderingList.indexOf(el), 0, sortedArr.splice(sortedArr.indexOf(el), 1)[0]);
                }
            }
            else {
                throw new Error(`${el} - Wrong propety name`);
            }
        }
    }
    return sortedArr;
}

export function specialData(obj) {
    const {description = 'Описание недоступно', ...res} = obj;
    const result = {...res, description};
    return result
}
