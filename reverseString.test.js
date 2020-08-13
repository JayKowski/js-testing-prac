import reverseString from './reverseString';

test('reverse a string', ()=>{
  expect(reverseString('words')).toBe('sdrow');
  expect(reverseString('universe')).toBe('esrevinu');
  expect(reverseString('development')).toBe('tnempoleved');
})

test('it fails', ()=>{
  expect(reverseString('microverse')).not.toBe('esrevrocim');
  expect(reverseString('Greenland')).not.toBe('danlneerG');
  expect(reverseString('Algeria')).not.toBe('airelgA');
})