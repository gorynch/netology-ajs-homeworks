// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log('sum: ',sum([1, 4]));

export const warriorsList = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
]
console.log('sorted', warriorsList.sort((a,b) => b.health - a.health));

export function sortByHealth (listOfWarriors) {
    // let sortedList = [];
    console.log('sorted list:', listOfWarriors.sort((a,b) => b.health - a.health)); 
    return listOfWarriors.sort((a,b) => b.health - a.health);
}

export function healthLevel (name, health) {
    let result = 'wounded';
    if (health > 50) {
        result = 'healthy';
    }
    if (health < 15) {
        result = 'critical';
    }
    return result;
}
