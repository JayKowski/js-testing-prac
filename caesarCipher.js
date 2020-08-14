function caesarCipher(string) {
  const stringArr = string.split(' ');
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphabetArr = Array.from(alphabet);
  const cipheredSentence = [];
  for (let i = 0; i < stringArr.length; i++) {
    let cipheredWord = [];
    for (let j = 0; j < stringArr[i].length; j++) {
      if (alphabetArr.includes(stringArr[i].charAt(j))) {
        const currentWord = stringArr[i];
        const charIndex = alphabetArr.indexOf(currentWord.charAt(j));
        const nextChar = charIndex === 25 ? alphabetArr[0] : 
              charIndex === 51 ? alphabetArr[26] : 
              alphabetArr[charIndex + 1];
        cipheredWord.push(nextChar);
      } else {
        cipheredWord.push(stringArr[i].charAt(j));
      }
    }
    cipheredSentence.push(cipheredWord);
    cipheredWord = [];
  }
  const completeSentence = cipheredSentence;
  const joinedWordArr = [];
  for (let k = 0; k < completeSentence.length; k++) {
    joinedWordArr.push(completeSentence[k].join(''));
  }

  return joinedWordArr.join(' ');
}

export default caesarCipher;