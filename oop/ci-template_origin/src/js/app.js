// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export class Character {
    constructor(name, type, health = 100, level = 1, attack, defence) {
    const max = 10;
    const min = 2;

    if(name.length < min || name.length > max){
        throw new Error(`Name length must be between ${min} ${max}`);
    }
    if (!types.includes(type)) {
        throw new Error(`Incorrecrt type of Charachter`);
    }
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }
    levelUp(){
        if (this.health != 0) {
            this.health = 100;
            this.level = this.level + 1;
            this.attack = this.attack*1.2;
            this.defence = this.defence*1.2;
        }
        else {
            throw new Error(`Character is dead`);
        }
        return this;
    }
}

export class Bowman extends Character {
    constructor(name, type, health = 100, level = 1) {
        super(name, type, health, level);
        this.attack = 25;
        this.defence = 25;
    }
}
export class Swordsman extends Character {
    constructor(name, type, health = 100, level = 1) {
        super(name, type, health, level);
        this.attack = 40;
        this.defence = 10;
    }
}
export class Magician extends Character {
    constructor(name, type, health = 100, level = 1) {
        super(name, type, health, level);
        this.attack = 10;
        this.defence = 40;
    }
}
export class Undead extends Character {
    constructor(name, type, health = 100, level = 1) {
        super(name, type, health, level);
        this.attack = 25;
        this.defence = 25;
    }
}
export class Zombie extends Character {
    constructor(name, type, health = 100, level = 1) {
        super(name, type, health, level);
        this.attack = 40;
        this.defence = 10;
    }
}
export class Daemon extends Character {
    constructor(name, type, health = 100, level = 1) {
        super(name, type, health, level);
        this.attack = 10;
        this.defence = 40;
    }
}

const Bowman_test = new Bowman ('BowmanName', 'Bowman');
const Swordsman_test = new Swordsman ('Swordsman_', 'Swordsman');
const Magician_test = new Magician ('Magician_n', 'Magician');
const Undead_test = new Undead ('Undead_nam', 'Undead');
const Zombie_test = new Zombie ('Zombie_nam', 'Zombie');
const Daemon_test = new Daemon ('Daemon_nam', 'Daemon', 50, 0);

console.log('Bowman : ',Bowman_test);
console.log('Swordsman : ',Swordsman_test);
console.log('Magician : ',Magician_test );
console.log('Undead : ',Undead_test);
console.log('Zombie : ',Zombie_test);
console.log('Daemon : ',Daemon_test);
