const { sum } = require('./math.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 5 + 6 to equal 11', () => {
  expect(sum(5, 66)).toBe(11);
})