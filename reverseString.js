function reverseString(string){
  const stringArray = Array.from(string);
  let reversed = [];
  for (let i = stringArray.length-1; i>-1;i--){
    reversed.push(stringArray[i]);
  }
  let result = reversed.join("");
  return result;
}

export default reverseString;
// reverseString("something");