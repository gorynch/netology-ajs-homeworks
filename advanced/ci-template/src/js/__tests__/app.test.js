// import { Bowman, Swordsman, Magician, Undead, Zombie, Daemon } from '../app';
import { Daemon, character, orderByProps, specialData } from '../app';

const orderingList = ['health', 'name', 'level', 'type', 'attack'];

const specialDataWdesc = {
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон'
  }

const specialDataWOdesc = {
    id: 9,
    name: 'Нокаутирующий удар',
    icon: 'http://...',
    description: 'Описание недоступно'
  }


test('Checking correct ordering according to input list', () => {
  const result = orderByProps(new Daemon, orderingList);
  expect(result).toEqual(['health', 'name', 'level', 'type', 'attack', 'defence'])
});

test('Checking correct ordering while input list is empty', () => {
  const result = orderByProps(new Daemon, []);
  expect(result).toEqual(['attack', 'defence', 'health', 'level', 'name', 'type'])
});

test('wrong value in input', () => {
  const t = () => {
// eslint-disable-next-line no-unused-vars
    const result = orderByProps(new Daemon, ['Incorrect Value']);
    throw new Error();
  }
  expect(t).toThrow(Error);
});

test('check func to get special data of character with description', () => {
  const result = specialData(character.special[0]);
  expect(result).toEqual(specialDataWdesc);
});

test('check func to get special data of character without description', () => {
  const result = specialData(character.special[1]);
  expect(result).toEqual(specialDataWOdesc);
})
