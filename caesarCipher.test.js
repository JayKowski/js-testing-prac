import caesarCipher from './caesarCipher';

test('It ciphers a string', () => {
  expect(caesarCipher('this is a string')).toBe('uijt jt b tusjoh');
  expect(caesarCipher('welcome to heaven')).toBe('xfmdpnf up ifbwfo');
});

test('It ciphers a string with punctuation', () => {
  expect(caesarCipher('Hello World!')).toBe('Ifmmp Xpsme!');
  expect(caesarCipher('To be continued...')).toBe('Up cf dpoujovfe...');
});

test('It ciphers a string and maintains case', () => {
  expect(caesarCipher('Canada, Mexico and Kenya are countries')).toBe('Dbobeb, Nfyjdp boe Lfozb bsf dpvousjft');
  expect(caesarCipher('Mr, Mrs, Sr, are capitalized')).toBe('Ns, Nst, Ts, bsf dbqjubmjafe');
});