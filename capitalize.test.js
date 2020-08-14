import capitalize from './capitalize.js';

test('capitalize first letter of a word', () => {
  expect(capitalize('today')).toBe('Today');
  expect(capitalize('MICROVERSE')).toBe('Microverse');
  expect(capitalize('apTITUDE')).toBe('Aptitude');
  expect(capitalize('dReAmS')).toBe('Dreams');
});

test('capitalize only the first letter', () => {
  expect(capitalize('tuesday')).not.toBe('TUesday');
  expect(capitalize('ALBUM')).not.toBe('ALBUm');
  expect(capitalize('inside')).not.toBe('insidE');
});