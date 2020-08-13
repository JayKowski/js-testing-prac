function caesarCipher(string){
  const stringArr=string.split(' ')
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const alphabetArr = Array.from(alphabet)
  let cipheredSentence = []
  for (let i = 0; i<stringArr.length;i++){
    let cipheredWord = [];
    for (let j=0;j<stringArr[i].length;j++){
      let lowerCased = stringArr[i].toLowerCase();
      let charIndex = alphabetArr.indexOf(lowerCased.charAt(j));
      let nextChar = charIndex === 25 ? alphabetArr[0] : alphabetArr[charIndex+1];
      cipheredWord.push(nextChar)
    }
    cipheredSentence.push(cipheredWord)
    cipheredWord = []    
  }
  let completeSentence = cipheredSentence;
  let joinedWordArr=[];
  for (let k = 0; k<completeSentence.length; k++){
    joinedWordArr.push(completeSentence[k].join(""))
  }
  return joinedWordArr.join(" ")
}

console.log(caesarCipher('aaa bbb www zzz asdasd'))