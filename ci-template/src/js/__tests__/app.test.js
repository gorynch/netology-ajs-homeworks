import { healthLevel, sortByHealth, warriorsList } from '../app';

const expectedList = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10}
]

const sortedList = sortByHealth(warriorsList);

test.each([
  ['мечник', 10, 'critical'],
  ['маг', 100, 'healthy'],
  ['лучник', 40, 'wounded']
  ])('health level of %s is %i', (name, health, expected) => {
  const result = healthLevel(name, health);
  expect(result).toEqual(expected);
});

test('sorted list of warriors', () => {
  expect(expectedList).toEqual(sortedList)
});