function reverseString(string) {
  const stringArray = Array.from(string);
  const reversed = [];
  for (let i = stringArray.length - 1; i > -1; i -= 1) {
    reversed.push(stringArray[i]);
  }
  const result = reversed.join('');
  return result;
}

export default reverseString;
// reverseString("something");