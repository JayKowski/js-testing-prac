import analyze from '../scripts/arrayAnalysis';

test('Should take in an array of any length', () => {
  expect(analyze([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(expect.objectContaining({
    average: 5, min: 1, max: 9, length: 9,
  }));
  expect(analyze([300, 546, 768, 234, 987, 123])).toEqual(expect.objectContaining({
    average: 493, min: 123, max: 987, length: 6,
  }));
  expect(analyze([12344, 54678, 12345, 87945, 78923, 55677, 3456, 6789]))
    .toEqual(expect.objectContaining({
      average: 39019.625, min: 3456, max: 87945, length: 8,
    }));
});