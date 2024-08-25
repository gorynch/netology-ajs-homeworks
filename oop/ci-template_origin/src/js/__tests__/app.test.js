import { Bowman, Swordsman, Magician, Undead, Zombie, Daemon } from '../app';

test.each([
  [Bowman, 'Bowman', 25, 25, {"attack": 25, "defence": 25, "health": 100, "level": 1, "name": "name", "type": "Bowman"}],
  [Swordsman, 'Swordsman', 40, 10, {"attack": 40, "defence": 10, "health": 100, "level": 1, "name": "name", "type": "Swordsman"}],
  [Magician, 'Magician', 10, 40, {"attack": 10, "defence": 40, "health": 100, "level": 1, "name": "name", "type": "Magician"}],
  [Undead, 'Undead', 25, 25, {"attack": 25, "defence": 25, "health": 100, "level": 1, "name": "name", "type": "Undead"}],
  [Zombie, 'Zombie', 40, 10, {"attack": 40, "defence": 10, "health": 100, "level": 1, "name": "name", "type": "Zombie"}],
  [Daemon, 'Daemon', 10, 40, {"attack": 10, "defence": 40, "health": 100, "level": 1, "name": "name", "type": "Daemon"}],
])('Create character %s', (name, type, attack, defence, expected) => {
  const result = new name('name', type);
  expect(result).toEqual(expected);
});


test('short name error', () => {
  const t = () => {
// eslint-disable-next-line no-unused-vars
    const result = new Daemon('n', 'Daemon');
    throw new Error();
  }
  expect(t).toThrow(Error);
});

test('long name error', () => {
  const t = () => {
// eslint-disable-next-line no-unused-vars
    const result = new Daemon('naaaaaaaame', 'Daemon');
    throw new Error();
  }
  expect(t).toThrow(Error);
});

test('wrong type error', () => {
  const t = () => {
    // eslint-disable-next-line no-unused-vars
    const result = new Daemon('name', 'Daemo');
    throw new Error();
  }
  expect(t).toThrow(Error);
});

test('levelUp func', () => {
  const result = new Daemon('name', 'Daemon');
  expect(result.levelUp()).toEqual({"attack": 12, "defence": 48, "health": 100, "level": 2, "name": "name", "type": "Daemon"})
});

test('levelUp to dead character error', () => {
  const t = () => {
    const result = new Daemon('name', 'Daemon', 0, 1);
    result.levelUp();
    throw new Error();
  }
  expect(t).toThrow(Error);
});


