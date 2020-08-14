import calculator from './calculator';

test('It multiplies numbers', () => {
  expect(calculator.multiply(2, 5)).toBe(10);
  expect(calculator.multiply(3, 6)).toBe(18);
  expect(calculator.multiply(333, 30)).toBe(9990);
});

test('It adds numbers', () => {
  expect(calculator.add(2, 5)).toBe(7);
  expect(calculator.add(3, 6)).toBe(9);
  expect(calculator.add(333, 30)).toBe(363);
});

test('It divides numbers', () => {
  expect(calculator.divide(2, 5)).toBe(0.4);
  expect(calculator.divide(3, 6)).toBe(0.5);
  expect(calculator.divide(330, 30)).toBe(11);
});

test('It subtracts numbers', () => {
  expect(calculator.subtract(2, 5)).toBe(-3);
  expect(calculator.subtract(3, 6)).toBe(-3);
  expect(calculator.subtract(330, 30)).toBe(300);
});